import { useState, useEffect } from "react";
import Slider from "react-slick";

function ShortSlide({ id }) {
  const [active, setActive] = useState(false);

  return (
    <div className="px-3">
      <div className="relative w-full pt-[177%] overflow-hidden rounded-xl shadow-lg">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?mute=1`}
          title="YouTube Short"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        {!active && (
          <div
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={() => setActive(true)}
          />
        )}
      </div>
    </div>
  );
}

export default function YouTubeShortsSlider({ shorts }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    touchMove: true,
    centerMode: false,
  };

  const desktopSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipe: false,
    touchMove: false,
    centerMode: false,
  };

  const settings = isMobile ? mobileSettings : desktopSettings;

  return (
    <div className="w-full px-3 md:px-8 py-12 bg-[#FFF7F3]">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Our Gifts, Your Ways!
      </h2>

      <Slider {...settings}>
        {shorts.map((id) => (
          <ShortSlide key={id} id={id} />
        ))}
      </Slider>
    </div>
  );
}