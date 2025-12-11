import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    tl.from(imageRef.current, {
      opacity: 0,
      x: -60,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        textRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container w-full py-20 px-5 md:px-20 bg-[#FFF7F3] flex flex-col md:flex-row items-center gap-12"
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80"
          className="w-[350px] md:w-[450px] rounded-2xl shadow-lg"
          alt="About uphaarwala"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          About uphaarwala
        </h2>

        <p
          ref={textRef}
          className="text-gray-700 text-lg leading-relaxed"
        >
        uphaarwala was born from a simple belief that gifting should feel personal, heartfelt, and truly memorable.
        <br/><br/>
        Every hamper, bouquet, candle, and custom creation we craft is thoughtfully designed to carry emotion, intention, and a touch of love. Whether it’s a birthday, anniversary, festival, or just a small <b>“you matter to me!”</b> our purpose is to bring warmth and joy to your special moments.
        <br/><br/>
        At uphaarwala, we see a gift as more than an item it’s a feeling, a memory, and a message from the heart. We’re here to help you express that beautifully.
        </p>
      </div>
    </section>
  );
}