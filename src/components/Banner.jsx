import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Banner({ image, heading, subheading }) {
  const headingRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: "power3.out",
    }).from(subRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: "power3.out",
    }, "-=0.4");
  }, []);

  return (
    <section className="w-full h-[65vh] relative overflow-hidden">

      {/* Background image */}
      <img
        src={image}
        alt="Banner"
        className="w-full h-full object-cover [image-rendering:optimizeQuality]"
      />

      {/* Overlay */}
      {/* <div className="absolute max-h-80 inset-0 bg-black/40"></div> */}

      {/* Text content */}
      <div className="absolute container inset-0 flex flex-col items-end justify-center px-10 md:px-20 text-black">
        
        <h1
          ref={headingRef}
          className="text-2xl md:text-4xl font-bold max-w-2xl leading-tight text-right"
        >
          {heading}
        </h1>

        <p
          ref={subRef}
          className="text-lg text-black md:text-2xl mt-4 max-w-xl"
        >
          {subheading}
        </p>

      </div>
    </section>
  );
}
