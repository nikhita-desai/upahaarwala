import LiquidRevealCard from "./LiquidRevealCard";

export default function MomentsWeCreate() {

  const occasions = [
    { tag: "Birthday", title: "Make Their Day Unforgettable", img: "/assets/gift.webp" },
    { tag: "Anniversary", title: "Celebrate Love & Togetherness", img: "/assets/gift2.webp" },
    { tag: "Festivals", title: "Gifts That Spark Joy", img: "/assets/gift3.webp" },
    { tag: "Valentine’s", title: "Say It From The Heart", img: "/assets/gift4.webp" },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold mb-14 text-gray-900">
          Moments We Create
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {occasions.map((o, i) => (
            <LiquidRevealCard
              key={i}
              src={o.img}
              title={o.title}
              tag={o.tag}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
