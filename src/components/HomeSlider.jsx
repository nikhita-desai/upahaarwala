import { useEffect, useState } from "react";
import gsap from "gsap";

const slides = [
  { title: "Celebrate the Moments That Matter", subtitle: "Make every special day unforgettable with handcrafted gifts made from the heart.", img: "/assets/gift1.webp" },
  { title: "Gifts That Tell Your Story", subtitle: "Turn your memories into beautiful keepsakes with personalized frames, lamps & more.", img: "/assets/gift2.webp" },
  { title: "Delivering Smiles, One Gift at a Time", subtitle: "Thoughtfully designed, beautifully packed we bring joy straight to their doorstep.", img: "/assets/gift3.webp" },
];

export default function HomeSlider() {
  const [active, setActive] = useState(0);

  // Slide expansion animation
  useEffect(() => {
    const slide = document.querySelector(".main-slide-wrapper");

    gsap.fromTo(
      slide,
      { width: 0 },
      { width: "100%", duration: 0.5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".main-slide",
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    );
  }, [active]);


  // 🔥 AUTO PLAY EVERY 30 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#FFF7F3] mt-10 py-10 px-5">
      <div className="max-w-[1400px] mx-auto flex items-center">
        
        {/* LEFT SIDEBARS */}
        <div className="flex flex-row gap-1">

          {active === 0 && (
            <>
              <Sidebar title={slides[0].title} onClick={() => setActive(0)} />
              <Sidebar title={slides[1].title} onClick={() => setActive(1)} />
            </>
          )}

          {active === 1 && (
            <>
              <Sidebar title={slides[0].title} onClick={() => setActive(0)} />
            </>
          )}

        </div>

        {/* MAIN SLIDE */}
        <div className="main-slide-wrapper flex-1 ml-1 mr-1 relative h-[280px] md:h-[420px] overflow-hidden rounded-2xl">
          <img
              src={slides[active].img}
              alt={slides[active].title}
              className="main-slide w-full h-full object-cover"
          />

          <h2 className="absolute bottom-22 md:bottom-12 left-4 text-white text-2xl md:text-3xl font-bold z-[5]">
              {slides[active].title}
          </h2>
          <p className="absolute bottom-4 md:bottom-6 left-4 text-white text-md md:text-1xl z-[5]">
            {slides[active].subtitle}
          </p>
        </div>



        {/* RIGHT SIDEBARS */}
        <div className="flex flex-row gap-1">

          {active === 1 && (
            <>
              <Sidebar title={slides[2].title} onClick={() => setActive(2)} />
            </>
          )}

          {active === 2 && (
            <>
              <Sidebar title={slides[1].title} onClick={() => setActive(1)} />
              <Sidebar title={slides[2].title} onClick={() => setActive(2)} />
            </>
          )}

        </div>

      </div>
    </section>
  );
}

/* -----------------------------------------
   SIDEBAR COMPONENT
------------------------------------------ */
function Sidebar({ title, onClick }) {
  return (
    <div
      className="bg-[#222] text-white w-[40px] md:w-[50px] rounded-4xl
      flex items-center justify-center h-[285px] md:h-[400px] cursor-pointer relative px-2 flex-col"
      onClick={onClick}
    >
      <p className="writing-mode-vertical text-center h-[240px] h-1/2 md:h-[380px] font-bold text-xs">
        {title}
      </p>
      <img
        src="/assets/arrow.png"
        alt="side bar arrow"
        className="w-8 h-6 md:h-10 object-cover w-10 h-1/2 group-hover:scale-105 transition duration-300"
      />
    </div>
  );
}

/* Vertical text utility */
const styles = `
  .writing-mode-vertical {
    writing-mode: vertical-rl;
    rotate: 180deg;
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
