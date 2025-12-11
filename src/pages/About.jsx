import HomeSlider from "../components/HomeSlider";
import ImageWithText from "../components/ImageWithText";

export default function About() {
  return (
    <div>
      <HomeSlider />
      <ImageWithText
        image="/assets/gift17.webp"
        title="Crafting Joy, One Gift at a Time"
        description="At UpahaarWala, every gift is thoughtfully handcrafted with love, care and attention to detail. From personalized keepsakes to luxury hampers, we create meaningful gifts that turn moments into memories."
      />
      <ImageWithText
        reverse
        image="/assets/gift14.webp"
        title="Celebrations Made Personal"
        description="Every order at UpahaarWala is designed with your emotions in mind. Our customized gifts, creative packaging and reliable delivery ensure that your special moments feel truly special."
      />

    </div>
  );
}
