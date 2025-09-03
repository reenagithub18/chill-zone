import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Users } from "lucide-react";
import morningHero from "@/assets/morning-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${morningHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-purple-600/70 to-accent/80" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 text-6xl animate-pulse">✨</div>
      <div className="absolute top-32 right-32 text-4xl float-gentle">💜</div>
      <div className="absolute bottom-32 left-16 text-5xl float-gentle">🌟</div>
      <div className="absolute top-40 right-16 text-3xl animate-pulse">😊</div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <span className="privacy-badge text-white bg-white/20 backdrop-blur">
            <Users className="h-4 w-4 inline mr-2" />
            No one can see who you are. Your feelings here are private forever. 🔐
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Mental Health
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Matters 💜
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Anonymous, safe, and judgment-free mental health support designed for Gen-Z. 
          Get help when you need it, how you need it. ✨
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            <Sparkles className="mr-2 h-5 w-5" />
            Start Your Journey
          </Button>
          <Button variant="mood" size="lg" className="text-lg px-8 py-6">
            Talk to AI Bestie 🤖
          </Button>
        </div>

        {/* Floating Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
          <div className="glass-card p-4 rounded-lg bounce-hover cursor-pointer">
            <p className="text-white font-medium">Do Insta stories make you feel left out? 🤳</p>
          </div>
          <div className="glass-card p-4 rounded-lg bounce-hover cursor-pointer">
            <p className="text-white font-medium">Feeling FOMO lately? 😰</p>
          </div>
          <div className="glass-card p-4 rounded-lg bounce-hover cursor-pointer">
            <p className="text-white font-medium">Do you compare yourself to others? 🪞</p>
          </div>
          <div className="glass-card p-4 rounded-lg bounce-hover cursor-pointer">
            <p className="text-white font-medium">Trouble focusing on studies? 📚</p>
          </div>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-white mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;