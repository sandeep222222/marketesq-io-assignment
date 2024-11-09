import HeroSection from "../components/HeroSection";
import Discover from "../components/Discover";
import Services from "../components/Services";

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Discover />
      <Services />
    </div>
  );
};

export default HomePage;