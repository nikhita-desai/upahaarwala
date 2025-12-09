import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageWithText({ image, title, description, reverse }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;

    gsap.fromTo(
      img,
      { scale: 1 },
      {
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="py-10 container">
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center gap-12 px-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE WRAPPER */}
        <div className="relative w-full md:w-1/3">
          <div className="absolute inset-0 bg-gray-200 rounded-sm translate-x-6 translate-y-8 -z-10"></div>
          <img
            ref={imgRef}
            src={image}
            alt={title}
            className="w-full rounded-sm shadow-lg object-cover"
          />
        </div>

        {/* TEXT BLOCK */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            {title}
          </h2>

          <p className="text-gray-700 text-lg md:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
