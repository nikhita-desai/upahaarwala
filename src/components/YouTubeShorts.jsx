import { useState } from "react";
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
        {/* Blocks iframe from stealing touch events during swipe */}
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="w-full px-3 bg-[#FFF7F3]">
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