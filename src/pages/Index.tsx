import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrendingTopics from "@/components/TrendingTopics";
import MoodTracker from "@/components/MoodTracker";
import WellnessSection from "@/components/WellnessSection";
import AIChatSection from "@/components/AIChat";
import ProfessionalHelp from "@/components/ProfessionalHelp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrendingTopics />
      <MoodTracker />
      <WellnessSection />
      <AIChatSection />
      <ProfessionalHelp />
      <Footer />
    </div>
  );
};

export default Index;
