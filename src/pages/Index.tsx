import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrendingTopics from "@/components/TrendingTopics";
import MoodTracker from "@/components/MoodTracker";
import WellnessSection from "@/components/WellnessSection";
import WorkingAIChat from "@/components/WorkingAIChat";
import MoodAnalytics from "@/components/MoodAnalytics";
import CrisisSupport from "@/components/CrisisSupport";
import ProfessionalHelp from "@/components/ProfessionalHelp";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import FloatingChatButton from "@/components/FloatingChatButton";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <TrendingTopics />
        <MoodTracker />
        <MoodAnalytics />
        <WellnessSection />
        <WorkingAIChat />
        <CrisisSupport />
        <ProfessionalHelp />
        <Footer />
        <FloatingChatButton />
      </div>
    </PageTransition>
  );
};

export default Index;
