import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PolaroidGallery() {
  const images = [
    { name: "Gift Hamper", img: "/assets/gift1.webp" },
    { name: "Glow LED Lamp", img: "/assets/gift10.webp" },
    { name: "Sclupture Gift", img: "/assets/gift6.webp" },
    { name: "Personalised Fridge magnet", img: "/assets/gift11.webp" },
    { name: "Unique Photo Frame", img: "/assets/gift8.webp" },
    { name: "Name LED Night Lamp", img: "/assets/gift9.webp" },
  ];

  const galleryRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".scatter-item");

    gsap.set(items, {
      opacity: 0,
      x: () => gsap.utils.random(-200, 200),
      y: () => gsap.utils.random(-200, 200),
      rotate: () => gsap.utils.random(-25, 25),
      scale: () => gsap.utils.random(0.85, 1.15),
    });

    ScrollTrigger.create({
      trigger: galleryRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: "back.out(1.7)",
        });
      },
    });
  }, []);

  return (
    <section className="py-16 px-5 bg-[#FFF7F3] overflow-hidden">
      <div className="container overflow-hidden">

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 text-black">
          Our Work & Deliveries
        </h2>

        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 overflow-hidden"
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="
                scatter-item 
                bg-white shadow-xl rounded-lg p-3 cursor-pointer relative
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <div className="overflow-hidden rounded-md relative group">
                <img
                  src={item.img}
                  alt={item.name}
                  className="
                    w-full h-80 object-cover
                    transition duration-300
                    group-hover:blur-sm
                    group-hover:brightness-50
                    group-hover:scale-110
                  "
                />

                <p
                  className="
                    absolute inset-0 flex items-center justify-center
                    text-white text-lg font-bold
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                >
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
