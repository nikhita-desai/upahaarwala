import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGift } from "react-icons/fa";

const budgets = [
  { label: "UNDER", price: "₹299" },
  { label: "UNDER", price: "₹499" },
  { label: "UNDER", price: "₹799" },
  { label: "UNDER", price: "₹999" },
];

export default function BudgetSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Entrance animation
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Floating + wiggle on each gift icon
    cardsRef.current.forEach((card) => {
      const icon = card?.querySelector(".gift-icon");
      if (!icon) return;
      gsap.to(icon, {
        y: -6,
        rotation: 10,
        duration: 0.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section className="py-5 pt-15 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl text-center font-semibold text-gray-700 mb-10">
          Gifts for every budget
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {budgets.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative group cursor-pointer"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-pink-100 blur-xl opacity-40 group-hover:opacity-70 transition" />

              {/* Card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-pink-800 to-pink-400 text-white p-10 flex flex-col items-center justify-center h-44 md:h-56 shadow-lg transform transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden">
                
                {/* Pulse ring on hover */}
                <span className="absolute inset-0 rounded-3xl border-2 border-white/30 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition duration-500" />

                <FaGift className="gift-icon text-3xl mb-2 opacity-90" />
                <span className="text-lg tracking-wide">{item.label}</span>
                <span className="text-4xl md:text-5xl font-bold mt-1">{item.price}</span>

                {/* Marquee strip */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden h-7 rounded-b-3xl opacity-20">
                  <div className="flex gap-5 animate-marquee whitespace-nowrap">
                    {Array(12).fill(null).map((_, j) => (
                      <FaGift key={j} className="text-white text-sm shrink-0" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}