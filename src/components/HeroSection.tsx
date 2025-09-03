import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Users } from "lucide-react";
import morningHero from "@/assets/morning-hero.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-75"
        style={{ 
          backgroundImage: `url(${morningHero})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating Elements with Parallax */}
      <div 
        className="absolute top-20 left-20 text-6xl animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >✨</div>
      <div 
        className="absolute top-32 right-32 text-4xl float-gentle"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >💜</div>
      <div 
        className="absolute bottom-32 left-16 text-5xl float-gentle"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >🌟</div>
      <div 
        className="absolute top-40 right-16 text-3xl animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >😊</div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6 animate-fade-in">
          <span className="inline-flex items-center bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover-glow">
            <Users className="h-4 w-4 inline mr-2" />
            No one can see who you are. Your feelings here are private forever. 🔐
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl animate-slide-up animate-delay-200">
          Your Mental Health
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg animate-shimmer">
            Matters 💜
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg animate-fade-in animate-delay-300">
          Anonymous, safe, and judgment-free mental health support designed for Gen-Z. 
          Get help when you need it, how you need it. ✨
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in animate-delay-500">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 hover-lift hover-glow transition-all duration-300"
            onClick={() => document.getElementById('mood')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Start Your Journey
          </Button>
          <Button 
            variant="mood" 
            size="lg" 
            className="text-lg px-8 py-6 hover-lift hover-glow transition-all duration-300"
            onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Talk to AI Bestie 🤖
          </Button>
        </div>

        {/* Floating Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
          <div 
            className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-4 rounded-xl shadow-xl hover:shadow-2xl hover:bg-white/30 transition-all duration-300 cursor-pointer hover-lift animate-bounce-in"
            onClick={() => {
              document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
              setTimeout(() => {
                const input = document.querySelector('input[placeholder="Share what\'s on your mind..."]') as HTMLInputElement;
                if (input) {
                  input.value = "Do Insta stories make you feel left out?";
                  input.focus();
                }
              }, 1000);
            }}
          >
            <p className="font-medium">Do Insta stories make you feel left out? 🤳</p>
          </div>
          <div 
            className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-4 rounded-xl shadow-xl hover:shadow-2xl hover:bg-white/30 transition-all duration-300 cursor-pointer hover-lift animate-bounce-in animate-delay-100"
            onClick={() => {
              document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
              setTimeout(() => {
                const input = document.querySelector('input[placeholder="Share what\'s on your mind..."]') as HTMLInputElement;
                if (input) {
                  input.value = "Feeling FOMO lately";
                  input.focus();
                }
              }, 1000);
            }}
          >
            <p className="font-medium">Feeling FOMO lately? 😰</p>
          </div>
          <div 
            className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-4 rounded-xl shadow-xl hover:shadow-2xl hover:bg-white/30 transition-all duration-300 cursor-pointer hover-lift animate-bounce-in animate-delay-200"
            onClick={() => {
              document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
              setTimeout(() => {
                const input = document.querySelector('input[placeholder="Share what\'s on your mind..."]') as HTMLInputElement;
                if (input) {
                  input.value = "Do you compare yourself to others?";
                  input.focus();
                }
              }, 1000);
            }}
          >
            <p className="font-medium">Do you compare yourself to others? 🪞</p>
          </div>
          <div 
            className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-4 rounded-xl shadow-xl hover:shadow-2xl hover:bg-white/30 transition-all duration-300 cursor-pointer hover-lift animate-bounce-in animate-delay-300"
            onClick={() => {
              document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
              setTimeout(() => {
                const input = document.querySelector('input[placeholder="Share what\'s on your mind..."]') as HTMLInputElement;
                if (input) {
                  input.value = "Trouble focusing on studies";
                  input.focus();
                }
              }, 1000);
            }}
          >
            <p className="font-medium">Trouble focusing on studies? 📚</p>
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