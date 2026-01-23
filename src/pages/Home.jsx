import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import GiftCategories from "../components/GiftCategories";
import PolaroidGallery from "../components/PolaroidGallery";
import AttitudeSection from "../components/AttitudeSection";

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
      <AttitudeSection />
      <AboutSection />
      <GiftCategories />
      <PolaroidGallery />
      {showVideo && (
        <Banner
          video="/banner-video.mp4"
        />
      )}
    </div>
  );
}
