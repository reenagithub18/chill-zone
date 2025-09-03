import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";
import yogaImage from "@/assets/yoga.jpg";
import meditationImage from "@/assets/meditation.jpg";
import healthyFoodImage from "@/assets/healthy-food.jpg";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const wellnessActivities = [
  {
    id: 1,
    title: "Ancient Yoga Wisdom",
    emoji: "🧘‍♀️",
    description: "Traditional yoga practices for modern stress relief and mind-body harmony",
    image: yogaImage,
    duration: "10-30 mins",
    link: "https://www.youtube.com/watch?v=2L2lnxIcNmo",
    channel: "Satvic Movement",
    benefits: ["Reduces anxiety", "Improves flexibility", "Boosts mood"],
    gradient: "from-green-400 to-emerald-600"
  },
  {
    id: 2,
    title: "Mindful Meditation",
    emoji: "🧠",
    description: "Guided meditation techniques from Isha Yoga for mental clarity and peace",
    image: meditationImage,
    duration: "5-20 mins",
    link: "https://www.youtube.com/watch?v=E6a7jI6RkFg",
    channel: "Isha Yoga",
    benefits: ["Calms mind", "Reduces stress", "Improves focus"],
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    id: 3,
    title: "Mindful Nutrition",
    emoji: "🥗",
    description: "Satvic food principles for nourishing your body and supporting mental wellness",
    image: healthyFoodImage,
    duration: "Lifestyle",
    link: "https://www.youtube.com/watch?v=7kGDsxw9y2A",
    channel: "Satvic Food",
    benefits: ["Boosts energy", "Improves mood", "Enhances clarity"],
    gradient: "from-orange-400 to-pink-600"
  }
];

const WellnessSection = () => {
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver();
  const { ref: cardsRef, isIntersecting: cardsVisible } = useIntersectionObserver();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Use the existing yoga image as background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${yogaImage})` }}
      />
      <div className="absolute inset-0 bg-white/85" />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className={`text-center mb-12 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Ancient Wisdom for Modern Minds 🌸
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover time-tested practices that have helped millions find peace, 
            balance, and mental clarity. Start your wellness journey today ✨
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {wellnessActivities.map((activity, index) => (
            <Card 
              key={activity.id} 
              className={`overflow-hidden hover:shadow-xl group border-2 border-transparent hover:border-purple-300 transition-all duration-500 hover-lift bg-white/95 backdrop-blur scroll-zoom ${cardsVisible ? 'animate' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activity.gradient} opacity-80`} />
                <div className="absolute top-4 left-4">
                  <span className="text-4xl group-hover:animate-bounce">
                    {activity.emoji}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white backdrop-blur">
                    <Play className="h-3 w-3 mr-1" />
                    {activity.duration}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                  {activity.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Benefits */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-purple-600">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.benefits.map((benefit, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        ✨ {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Channel */}
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Channel: </span>
                  <span className="text-purple-600">{activity.channel}</span>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full group-hover:scale-105 transition-transform bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600" 
                  asChild
                >
                  <a 
                    href={activity.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Play className="h-4 w-4" />
                    Start Practice
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Encouragement */}
        <div className="text-center mt-12 max-w-2xl mx-auto animate-fade-in animate-delay-500">
          <div className="bg-white/95 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-200 hover-glow">
            <h3 className="text-xl font-semibold mb-3">
              Remember: Small steps lead to big changes 🌱
            </h3>
            <p className="text-gray-600">
              Even 5 minutes of daily practice can significantly improve your mental wellness. 
              Start where you are, with what you have. You've got this! 💪✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;