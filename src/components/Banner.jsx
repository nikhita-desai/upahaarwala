import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Banner({ image, video, heading, subheading }) {
  const headingRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: "power3.out",
    }).from(
      subRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <section className="w-full h-[65vh] relative overflow-hidden bg-[#FFF7F3]">
      
      {/* Background */}
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={image}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      )}

      {/* Text */}
      <div className="absolute container inset-0 flex flex-col items-end justify-center px-10 md:px-20 text-black">
        <h2
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight text-right"
        >
          {heading}
        </h2>

        <p
          ref={subRef}
          className="text-lg md:text-2xl mt-4 max-w-xl text-right"
        >
          {subheading}
        </p>
      </div>
    </section>
  );
}