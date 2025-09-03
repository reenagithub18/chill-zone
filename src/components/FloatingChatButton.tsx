import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

const FloatingChatButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
      <div className="relative">
        {/* Chat bubble */}
        <div className="absolute -top-16 -left-32 bg-white rounded-lg shadow-lg p-3 border border-purple-200 animate-fade-in animate-delay-500">
          <p className="text-sm text-gray-700 whitespace-nowrap">
            Need someone to talk to? 💭
          </p>
          <div className="absolute bottom-0 right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
        
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
        >
          <X className="h-3 w-3 text-gray-600" />
        </button>
        
        {/* Main button */}
        <Button
          className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-glow"
          onClick={() => {
            document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingChatButton;