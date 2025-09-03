import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const WorkingAIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI mental health companion. I'm here to listen and support you. How are you feeling today? 💜",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);



  const getAIResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    const words = msg.split(' ');
    
    // Mental health keywords with responses
    const responses = {
      // Negative emotions
      negative: [
        "I hear you, and what you're feeling is completely valid. Sometimes life feels overwhelming, but you're stronger than you know. What's one small thing that might help you feel a bit better right now? 💜",
        "Thank you for sharing this with me. It takes courage to open up about difficult feelings. You don't have to go through this alone. What's been the most challenging part of your day? 🌸",
        "Your feelings matter, and so do you. Even when things feel dark, there's always hope. What's one thing you're grateful for today, even if it's small? ✨",
        "I can sense you're going through something tough. Remember, difficult emotions are temporary - they come and go like waves. What usually helps you feel more grounded? 🌿"
      ],
      
      // Positive emotions
      positive: [
        "I love hearing positive energy from you! 🌟 What's been the highlight of your day so far?",
        "Your positivity is wonderful! ✨ It's so important to celebrate the good moments. What's making you feel this way?",
        "This makes me happy too! 🎉 Sharing joy is one of the best parts of being human. Tell me more about what's going well!",
        "I'm so glad you're feeling good! 😊 What's one thing you want to remember about this positive moment?"
      ],
      
      // Questions or seeking advice
      questions: [
        "That's a really thoughtful question. Let me think about this with you. What's your gut feeling about the situation? Sometimes our intuition knows more than we realize. 🤔",
        "I appreciate you asking. While I can't give professional advice, I can listen and support you. What feels most important to you right now? 💜",
        "That's something many people wonder about. What's your experience been so far? Sometimes talking through our thoughts helps us find our own answers. 🌸",
        "Great question! What made you think about this? I'd love to explore this topic with you. ✨"
      ],
      
      // General conversation
      general: [
        "I'm here to listen to whatever you want to share. Your thoughts and feelings are important. What's been on your mind lately? 💜",
        "Thank you for reaching out and sharing with me. I'm glad you're here. What would be most helpful for you to talk about right now? 🌸",
        "I hear you. Sometimes it helps just to put our thoughts into words. What's the most important thing you want me to know about how you're feeling? ✨",
        "You've come to a safe space where you can be yourself. What's something you've been thinking about that you'd like to explore? 🌿",
        "I'm listening with an open heart. Whether it's big or small, happy or sad, I'm here for whatever you want to share. What's going on in your world? 🤗"
      ]
    };
    
    // Specific phrase responses first
    if (msg.includes("don't feel like") || msg.includes("no motivation") || msg.includes("don't want to")) {
      const responses = [
        "That feeling of not wanting to do anything is so valid. Sometimes our mind needs rest. What's one tiny thing you could do just for you today? 💙",
        "I hear you. When motivation feels gone, even small things feel huge. You don't have to do everything today. What usually brings you comfort? 🌸",
        "Those unmotivated days are really tough. Your feelings are normal. What would you tell a friend feeling this way? 💜"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (msg.includes("what to eat") || (msg.includes("eat") && msg.includes("what"))) {
      const responses = [
        "When we're stressed, eating can feel complicated. What sounds good right now? Even something simple like toast counts. Your body needs fuel. 🍎",
        "Food decisions can feel overwhelming. What's something easy you have available? Any food is better than no food. 🥪",
        "Eating regularly helps our mood too. What's one simple thing you could have? Even a snack is a win. 💚"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Check for emotional keywords
    const negativeKeywords = ['sad', 'depressed', 'anxious', 'worried', 'stressed', 'overwhelmed', 'lonely', 'alone', 'hurt', 'pain', 'difficult', 'hard', 'struggling', 'tired', 'exhausted', 'angry', 'frustrated', 'scared', 'afraid', 'panic', 'crying', 'hopeless', 'lost', 'confused', 'upset', 'mad', 'terrible', 'awful', 'bad', 'worse', 'worst', 'hate', 'furious'];
    
    const positiveKeywords = ['happy', 'good', 'great', 'amazing', 'wonderful', 'excited', 'joy', 'love', 'awesome', 'fantastic', 'excellent', 'perfect', 'best', 'better', 'glad', 'grateful', 'thankful', 'blessed', 'proud', 'accomplished', 'successful', 'confident', 'optimistic', 'hopeful', 'peaceful', 'calm', 'relaxed', 'content'];
    
    // Determine response category
    let category = 'general';
    
    if (negativeKeywords.some(keyword => msg.includes(keyword))) {
      category = 'negative';
    } else if (positiveKeywords.some(keyword => msg.includes(keyword))) {
      category = 'positive';
    } else if (msg.includes('what') || msg.includes('how') || msg.includes('why') || msg.includes('?')) {
      category = 'questions';
    }
    
    // Return random response from appropriate category
    const categoryResponses = responses[category as keyof typeof responses];
    return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: getAIResponse(input),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="chat" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-4xl animate-float opacity-20">💭</div>
      <div className="absolute top-32 right-20 text-3xl animate-float opacity-20" style={{ animationDelay: '1s' }}>🤖</div>
      <div className="absolute bottom-20 left-32 text-5xl animate-float opacity-20" style={{ animationDelay: '2s' }}>💜</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Chat with Your AI Companion 🤖💜
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            24/7 support that understands you. Share your feelings in a safe, judgment-free space.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-xl">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-6 w-6" />
              AI Mental Health Companion
              <span className="ml-auto text-sm bg-white/20 px-2 py-1 rounded-full">Online 24/7</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0">
            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start gap-2 max-w-xs lg:max-w-md ${message.isUser ? 'flex-row-reverse' : ''}`}>
                    <div className={`p-2 rounded-full ${message.isUser ? 'bg-purple-500' : 'bg-gray-200'}`}>
                      {message.isUser ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-gray-600" />}
                    </div>
                    <div className={`p-3 rounded-lg ${message.isUser ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2">
                    <div className="p-2 rounded-full bg-gray-200">
                      <Bot className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="p-3 rounded-lg bg-gray-100">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Share what's on your mind..."
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1"
                />
                <Button onClick={sendMessage} className="bg-purple-500 hover:bg-purple-600">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                🔒 This conversation is completely anonymous and private
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WorkingAIChat;