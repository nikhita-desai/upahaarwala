import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import GiftCategories from "../components/GiftCategories";
import PolaroidGallery from "../components/PolaroidGallery";
import YouTubeShortsSlider from "../components/YouTubeShorts";
import BudgetSection from "../components/BudgetSection";

export default function Home() {
  const showImage = true;   // change this based on upload
  const showVideo = false;  // change this based on upload

  return (
    <div>
      {showImage && (
        <Banner
            image="/assets/banner.png"
            heading="Celebrate With uphaarwala"
            subheading="Thoughtful handcrafted gifts for every occasion"
        />
      )}
      <AboutSection />
      <YouTubeShortsSlider
        shorts={[
          "4mKGNqT9wtI",
          "2vHmVSpufWI",
          "g-W-mBOPWU0",
          "3NPTnLN916E",
          "3lt0wy1Of9c",
          "uuOiMDxsUbQ",
          "rqo7IL1bQrU",
        ]}
      />
      <BudgetSection />
      <GiftCategories />
      <PolaroidGallery />
    </div>
  );
}
