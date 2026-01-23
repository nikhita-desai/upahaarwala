import { useEffect, useRef, useState } from "react";

export default function AttitudeSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const rules = [
    {
      label: "Made With Care",
      title: "Discipline",
      description: "Every gift is crafted with precision and attention to detail.",
    },
    {
      label: "Built On Trust",
      title: "Trust",
      description: "Thousands trust us to deliver emotions, not just products.",
    },
    {
      label: "Crafted With Heart",
      title: "Passion",
      description: "We pour heart and creativity into everything we create.",
    },
    {
      label: "Committed To You",
      title: "Devotion",
      description: "Your moments matter to us as much as they matter to you.",
    },
    {
      label: "Our Promise",
      title: "Promise",
      description: "Thoughtful gifting, delivered exactly the way you imagine.",
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

    const onResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* ---------------- COLOR ---------------- */
  /* ---------------- SOFT BLUE → BLACK TEXT COLOR ---------------- */

  const shades = [
    { r: 226, g: 232, b: 255 }, // very light blue
    { r: 191, g: 219, b: 254 }, // soft sky blue
    { r: 147, g: 197, b: 253 }, // blue
    { r: 96,  g: 165, b: 250 }, // deeper blue
    { r: 59,  g: 130, b: 246 }, // strong blue
    { r: 30,  g: 64,  b: 175 }, // navy
    { r: 20,  g: 40,  b: 60 },  // almost black
  ];

  const lerp = (a, b, t) => a + (b - a) * t;

  const getColor = (progress) => {
    const steps = shades.length - 1;
    const scaled = progress * steps;
    const index = Math.floor(scaled);
    const t = scaled - index;

    const c1 = shades[index];
    const c2 = shades[index + 1] || c1;

    return `rgb(
      ${Math.round(lerp(c1.r, c2.r, t))},
      ${Math.round(lerp(c1.g, c2.g, t))},
      ${Math.round(lerp(c1.b, c2.b, t))}
    )`;
  };

  const color = getColor(progress);

  // MOBILE FINAL POSITIONS
  const FINAL_Y = [0, 60, 120, 180, 240];
  const START_Y = 180;

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-100"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ATTITUDE TEXT */}
        <div className="absolute inset-0 flex items-start md:items-center justify-center pointer-events-none pt-40 md:pt-0">
          <h2
            className="uppercase font-extrabold tracking-tight select-none"
            style={{ fontSize: "clamp(1rem,14vw,16rem)",  color, transition: "color 0.12s linear" }}
          >
            {"uphaarwala".split("").map((letter, i) => {
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
                  {letter}
                </span>
              );
            })}
          </h2>
        </div>

        {/* ---------------- DESKTOP CARDS ---------------- */}
        {!isMobile && (
          <div className="absolute inset-0 flex items-center">
            <div
              className="flex gap-20 px-[10vw]"
              style={{
                transform: `translateX(-${progress * 800}px)`,
                transition: "transform 0.1s linear",
              }}
            >
              {rules.map((rule, i) => {
                const cp = Math.max(0, Math.min(1, (progress - i * 0.15) * 5));
                return (
                  <div
                    key={i}
                    className={`w-80 flex-shrink-0 ${
                      i % 2 === 0 ? "-mt-32" : "mt-32"
                    }`}
                    style={{
                      opacity: cp,
                      transform: `translateY(${(1 - cp) * 60}px) scale(${0.9 + cp * 0.1})`,
                    }}
                  >
                    <Card rule={rule} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ---------------- MOBILE STACK ---------------- */}
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
    <article className="bg-slate-600/80 backdrop-blur-md rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs text-white-400 uppercase tracking-wider font-semibold">
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
