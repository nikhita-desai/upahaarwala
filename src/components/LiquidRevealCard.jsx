import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LiquidRevealCard({ src, title, tag }) {
  const maskRef = useRef(null);

  useEffect(() => {
    const mask = maskRef.current;
    if (!mask) return;

    gsap.fromTo(
      mask,
      { attr: { d: "M0 0 H300 V0 Q150 0 0 0 Z" } },
      {
        attr: { d: "M0 0 H300 V300 Q150 260 0 300 Z" },
        ease: "power2.out",
        duration: 1.4,
        scrollTrigger: {
          trigger: mask,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      }
    );

  }, []);

  return (
    <div className="mw-card">
      <div className="liquid-wrapper h-[360px] md:h-[420px]">

        <svg viewBox="0 0 300 300">
          <defs>
            <mask id="waveMask">
              <rect width="300" height="300" fill="white" />
              <path
                ref={maskRef}
                fill="black"
                d="M0 0 H300 V0 Q150 0 0 0 Z"
              />
            </mask>
          </defs>

          <image
            href={src}
            width="300"
            height="300"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#waveMask)"
          />
        </svg>
      </div>

      <p className="mt-4 text-sm uppercase tracking-wide text-pink-500 font-semibold">
        {tag}
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
        {title}
      </h3>
    </div>
  );
}
