import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Heart, Brain, Users } from "lucide-react";
import trendingBackground from "@/assets/trending-background.jpg";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const trendingTopics = [
  {
    id: 1,
    title: "Social Media Pressure",
    emoji: "📱",
    description: "Dealing with comparison culture and FOMO on Instagram, TikTok & Snapchat",
    category: "Social",
    color: "from-pink-500 to-rose-500",
    icon: <Users className="h-5 w-5" />,
    stats: "47% of Gen-Z affected"
  },
  {
    id: 2,
    title: "Academic Burnout",
    emoji: "📚",
    description: "Managing study stress, exam anxiety, and career pressure",
    category: "Academic",
    color: "from-blue-500 to-indigo-500",
    icon: <Brain className="h-5 w-5" />,
    stats: "62% report high stress"
  },
  {
    id: 3,
    title: "Relationship Anxiety",
    emoji: "💕",
    description: "Navigating friendships, dating, and family relationships",
    category: "Relationships",
    color: "from-purple-500 to-pink-500",
    icon: <Heart className="h-5 w-5" />,
    stats: "38% struggle with connections"
  },
  {
    id: 4,
    title: "Body Image & Self-Worth",
    emoji: "🪞",
    description: "Building confidence and self-acceptance in a filtered world",
    category: "Self-Image",
    color: "from-emerald-500 to-teal-500",
    icon: <Heart className="h-5 w-5" />,
    stats: "53% report body image issues"
  },
  {
    id: 5,
    title: "Future Uncertainty",
    emoji: "🔮",
    description: "Coping with career anxiety and life direction confusion",
    category: "Future",
    color: "from-orange-500 to-red-500",
    icon: <TrendingUp className="h-5 w-5" />,
    stats: "71% worry about future"
  },
  {
    id: 6,
    title: "Loneliness & Isolation",
    emoji: "🤗",
    description: "Finding connection and community in a digital age",
    category: "Connection",
    color: "from-violet-500 to-purple-500",
    icon: <Users className="h-5 w-5" />,
    stats: "43% feel lonely often"
  }
];

const TrendingTopics = () => {
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver();
  const { ref: cardsRef, isIntersecting: cardsVisible } = useIntersectionObserver();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${trendingBackground})` }}
      />
      <div className="absolute inset-0 bg-white/80" />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className={`text-center mb-12 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-8 w-8 text-purple-600 animate-wiggle" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              What's Trending in Mental Health 🔥
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Real issues Gen-Z is talking about. You're not alone in these struggles - 
            millions are going through the same things ✨
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {trendingTopics.map((topic, index) => (
            <Card 
              key={topic.id} 
              className={`hover:shadow-xl cursor-pointer border-2 border-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-400 hover:to-pink-400 overflow-hidden group transition-all duration-500 hover-lift bg-white/95 backdrop-blur scroll-zoom ${cardsVisible ? 'animate' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${topic.color}`} />
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2 group-hover:animate-bounce">
                    {topic.emoji}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {topic.icon}
                    <span className="ml-1">{topic.category}</span>
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                  {topic.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {topic.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-600">
                    {topic.stats}
                  </span>
                  <div className="flex gap-1">
                    <span className="text-2xl">💬</span>
                    <span className="text-2xl">🤝</span>
                    <span className="text-2xl">💜</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Want to talk about any of these? Our AI is here to listen 24/7 🤖💭
          </p>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-flex">
            Everything you share is 100% anonymous and confidential 🔐
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;