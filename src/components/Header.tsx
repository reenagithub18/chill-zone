import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm animate-slide-up">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-xl hover-glow transition-all duration-300">
              <Heart className="h-6 w-6 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                MindSpace 💜
              </h1>
              <p className="text-xs text-gray-600">You Matter</p>
            </div>
          </div>

          {/* Privacy Badge */}
          <div className="hidden md:flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium animate-fade-in animate-delay-200 hover-glow">
            <Shield className="h-4 w-4" />
            <span>100% Anonymous & Private 🔐</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 animate-fade-in animate-delay-300">
            <a href="#home" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 hover:-translate-y-1">
              Home 🏠
            </a>
            <a href="#mood" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 hover:-translate-y-1">
              Mood Tracker 😊
            </a>
            <a href="#chat" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 hover:-translate-y-1">
              AI Chat 🤖
            </a>
            <a href="#help" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 hover:-translate-y-1">
              Get Help 👩‍⚕️
            </a>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover-lift" size="sm">
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
          <div className="md:hidden mt-4 p-4 rounded-lg bg-white shadow-lg animate-slide-up">
            <div className="flex flex-col gap-4">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium text-center">
                <Shield className="h-4 w-4 inline mr-2" />
                100% Anonymous & Private 🔐
              </div>
              <a href="#home" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                Home 🏠
              </a>
              <a href="#mood" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                Mood Tracker 😊
              </a>
              <a href="#chat" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                AI Chat 🤖
              </a>
              <a href="#help" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                Get Help 👩‍⚕️
              </a>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 w-full">
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