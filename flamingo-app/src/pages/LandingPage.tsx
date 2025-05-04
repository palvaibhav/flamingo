import HeroSection from "@/components/HeroSection";
import Navbar from "../components/Navbar";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const LandingPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <HeroSection />
    <FeatureSection />
    <PricingSection />
    <Footer />
  </div>
);

export default LandingPage;
