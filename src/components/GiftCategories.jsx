import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GiftCategories() {
  const categories = [
    { name: "LOVE MAGNETS", img: "/assets/gift4.webp", area: "love" },
    { name: "POPUP BOX", img: "/assets/gift19.jpg", area: "popup" },
    { name: "PHOTO SCROLL", img: "/assets/gift3.webp", area: "scroll" },
    { name: "FOREVER ROSE", img: "/assets/gift16.webp", area: "rose" },
    { name: "PLANTS", img: "/assets/gift13.webp", area: "perfume" },
    { name: "CUSTOMIZED", img: "/assets/gift2.webp", area: "keychain" },
  ];

  const sectionRef = useRef(null);
  

  useEffect(() => {
    const items = gsap.utils.toArray(".category-item");

    // Scatter effect BEFORE scroll
    gsap.set(items, {
      opacity: 0,
      x: () => gsap.utils.random(-200, 200),
      y: () => gsap.utils.random(-200, 200),
      rotate: () => gsap.utils.random(-15, 15),
      scale: () => gsap.utils.random(0.85, 1.15),
    });

    // Snap into layout ON scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "back.out(1.5)",
        });
      },
    });
  }, []);

  return (
    <section className="py-20 px-5 bg-[#FFF7F3]" ref={sectionRef}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Explore Our Categories
        </h2>

        {/* Desktop Masonry Grid */}
        <div
          className="
            hidden md:grid gap-6
            grid-cols-[1fr_1fr_1fr]
            grid-rows-[260px_260px_260px]
            grid-areas-categories-desktop
          "
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              style={{ gridArea: cat.area }}
              className="category-item rounded-2xl overflow-hidden bg-white shadow cursor-pointer group"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <p className="text-center font-semibold mt-2 mb-3">{cat.name}</p>
            </div>
          ))}
        </div>

        {/* Mobile 2-Column Masonry */}
        <div
          className="
            grid md:hidden gap-4
            grid-cols-[1fr_1fr]
            grid-rows-[220px_220px_220px_220px]
            grid-areas-categories-mobile
          "
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              style={{ gridArea: cat.area }}
              className="category-item rounded-2xl overflow-hidden bg-white shadow cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
              <p className="text-center font-semibold mt-2 mb-3 text-sm">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
