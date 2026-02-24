import Slider from "react-slick";

export default function YouTubeShortsSlider({ shorts }) {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // ✅ mobile default
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768, // ≥768
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 1024, // ≥1024
      settings: { slidesToShow: 4 },
    },
  ],
};

  return (
    <div className="w-full px-3">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Gifts, Your Ways!
        </h2>
        <Slider {...settings}>
            {shorts.map((id) => (
            <div key={id} className="px-3">
                <div className="relative w-full pt-[177%] overflow-hidden rounded-xl shadow-lg">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}?mute=1`}
                    title="YouTube Short"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
                </div>
            </div>
            ))}
        </Slider>
    </div>
  );
}