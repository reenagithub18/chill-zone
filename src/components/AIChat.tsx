import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Heart, Sparkles } from "lucide-react";

interface ChatMessage {
  id: number;
  type: "user" | "ai";
  message: string;
  timestamp: Date;
}

const AIChatSection = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: "ai",
      message: "Hey bestie, what are you feeling today? 😊 I'm here to listen without any judgment. Your privacy is 100% protected! 💜",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const aiResponses = [
    "I hear you, and what you're feeling is completely valid 💜 Many people our age go through similar experiences.",
    "That sounds really challenging. Remember, it's okay to not be okay sometimes. You're being so brave by reaching out ✨",
    "Your feelings matter, and I'm here for you. Have you tried any grounding techniques when you feel this way? 🌱",
    "You're not alone in this. Sometimes just naming our feelings can help us process them better 🤗",
    "I'm proud of you for sharing that with me. It takes courage to be vulnerable about our mental health 💪",
    "That's such a common struggle for our generation. Would you like some specific strategies that might help? 🛠️"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: messages.length + 1,
      type: "user",
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: messages.length + 2,
        type: "ai",
        message: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);

    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <section id="chat" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="hero-gradient p-3 rounded-full">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Chat with Your AI Bestie 🤖
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Available 24/7 for judgment-free conversations. Share anything - 
            your AI bestie is here to listen, support, and guide you ✨
          </p>
          <div className="privacy-badge mt-4 inline-flex">
            <Heart className="h-4 w-4 mr-2" />
            Completely anonymous - no personal data stored
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card min-h-[500px] flex flex-col">
            <CardHeader className="border-b border-white/20">
              <CardTitle className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">MindSpace AI</h3>
                  <p className="text-sm text-muted-foreground">Your supportive AI companion</p>
                </div>
                <Badge className="ml-auto bg-green-100 text-green-700">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Online
                </Badge>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-6">
              {/* Messages */}
              <div className="flex-1 space-y-4 mb-6 max-h-80 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.type === "ai" && (
                      <div className="w-8 h-8 rounded-full hero-gradient flex items-center justify-center flex-shrink-0">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-white/80 backdrop-blur border border-white/20"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.message}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>

                    {message.type === "user" && (
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex gap-3">
                <Input
                  placeholder="Share what's on your mind... 💭"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 rounded-full border-primary/20 focus:border-primary"
                />
                <Button
                  onClick={handleSendMessage}
                  variant="chat"
                  size="icon"
                  className="rounded-full hover:scale-105 transition-transform"
                  disabled={!inputMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Quick Starters */}
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Quick conversation starters:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "I'm feeling anxious today 😰",
                    "Having trouble with friends 👥",
                    "Stressed about school 📚",
                    "Can't sleep well 😴"
                  ].map((starter, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs hover:bg-primary hover:text-primary-foreground"
                      onClick={() => setInputMessage(starter)}
                    >
                      {starter}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIChatSection;