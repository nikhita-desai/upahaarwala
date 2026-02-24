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
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="py-5 pt-15 bg-gray-50 bg-[#FFF7F3]">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-center font-semibold text-gray-700 mb-10">
          Gifts for every budget
        </h2>

        {/* Cards */}
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
              <div className="relative rounded-3xl bg-gradient-to-br from-pink-800 to-pink-400 text-white p-10 flex flex-col items-center justify-center h-44 md:h-56 shadow-lg transform transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <FaGift className="text-xl mb-2 opacity-90 transition transform group-hover:-translate-y-1"/>
                <span className="text-lg tracking-wide">
                  {item.label}
                </span>

                <span className="text-4xl md:text-5xl font-bold mt-1">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}