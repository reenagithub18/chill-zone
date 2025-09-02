import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="hero-gradient p-2 rounded-xl float-gentle">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MindSpace 💜
              </h1>
              <p className="text-xs text-muted-foreground">You Matter</p>
            </div>
          </div>

          {/* Privacy Badge */}
          <div className="hidden md:flex items-center gap-2 privacy-badge float-gentle">
            <Shield className="h-4 w-4" />
            <span>100% Anonymous & Private 🔐</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home 🏠
            </a>
            <a href="#mood" className="text-sm font-medium hover:text-primary transition-colors">
              Mood Tracker 😊
            </a>
            <a href="#chat" className="text-sm font-medium hover:text-primary transition-colors">
              AI Chat 🤖
            </a>
            <a href="#help" className="text-sm font-medium hover:text-primary transition-colors">
              Get Help 👩‍⚕️
            </a>
            <Button variant="hero" size="sm" className="pulse-glow">
              Start Journey ✨
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-lg glass-card animate-slide-up">
            <div className="flex flex-col gap-4">
              <div className="privacy-badge text-center">
                <Shield className="h-4 w-4 inline mr-2" />
                100% Anonymous & Private 🔐
              </div>
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
                Home 🏠
              </a>
              <a href="#mood" className="text-sm font-medium hover:text-primary transition-colors">
                Mood Tracker 😊
              </a>
              <a href="#chat" className="text-sm font-medium hover:text-primary transition-colors">
                AI Chat 🤖
              </a>
              <a href="#help" className="text-sm font-medium hover:text-primary transition-colors">
                Get Help 👩‍⚕️
              </a>
              <Button variant="hero" className="w-full">
                Start Journey ✨
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;