import { useEffect, useRef, useState } from "react";

export default function AttitudeSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const rules = [
    {
      label: "Made With Care",
      title: "Discipline",
      description: "At our core, we are disciplined professionals.",
      position: "top",
    },
    {
      label: "Built On Trust",
      title: "Trust",
      description: "We build trust through honest decisions.",
      position: "bottom",
    },
    {
      label: "Crafted With Heart",
      title: "Passion",
      description: "Every project gets our full passion.",
      position: "top",
    },
    {
      label: "Committed To You",
      title: "Devotion",
      description: "We stay devoted until perfection.",
      position: "bottom",
    },
    {
      label: "Our Promise",
      title: "Promise",
      description: "Our promise is thoughtful execution.",
      position: "top",
    },
  ];

  /* ---------------- SCROLL ---------------- */
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const vh = window.innerHeight;

      const raw = (window.scrollY - sectionTop) / (sectionHeight - vh);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", () => setIsMobile(window.innerWidth < 768));
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- COLOR ---------------- */
  const color = `rgb(
    ${Math.round(59 + (239 - 59) * progress)},
    ${Math.round(130 + (68 - 130) * progress)},
    ${Math.round(246 + (68 - 246) * progress)}
  )`;

  /* ---------------- HELPERS ---------------- */
  const lerp = (a, b, t) => a + (b - a) * t;

  // 🔒 FINAL STACK POSITIONS (YOUR DOM)
  const FINAL_Y = [0, 40, 69, 108, 149];
  const START_Y = 180;

  return (
    <section ref={sectionRef} className="relative bg-slate-900" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ATTITUDE TEXT */}
        <div className="absolute inset-0 flex items-start justify-center md:items-center pointer-events-none pt-40 md:pt-0">
          <h2
            className="uppercase font-extrabold tracking-tight select-none"
            style={{ fontSize: "clamp(4rem,18vw,20rem)", color }}
          >
            {"attitude".split("").map((l, i) => {
              const lp = Math.max(0, Math.min(1, (progress - i * 0.08) * 8));
              return (
                <span
                  key={i}
                  className="inline-block"
                  style={{
                    opacity: lp,
                    transform: `translateY(${(1 - lp) * 80}px)`,
                  }}
                >
                  {l}
                </span>
              );
            })}
          </h2>
        </div>

        {/* MOBILE STACK (FIXED) */}
        {isMobile && (
          <div className="absolute inset-0 flex items-center justify-center">
            {rules.map((rule, i) => {
              const cp = Math.max(0, Math.min(1, (progress - i * 0.14) * 4));

              const y = lerp(START_Y, FINAL_Y[i], cp);

              return (
                <div
                  key={i}
                  className="absolute w-[85vw] max-w-sm"
                  style={{
                    opacity: cp,
                    transform: `translateY(${y}px) scale(1)`,
                    zIndex: i,
                    transition: "transform 0.08s linear, opacity 0.08s linear",
                  }}
                >
                  <Card rule={rule} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */
function Card({ rule }) {
  return (
    <article className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs text-pink-400 uppercase tracking-wider font-semibold">
          {rule.label}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-white uppercase mb-3">
        {rule.title}
      </h3>
      <p className="text-slate-300 text-sm leading-relaxed">
        {rule.description}
      </p>
    </article>
  );
}
