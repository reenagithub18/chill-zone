import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";
import moodBackground from "@/assets/mood-background.jpg";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface MoodSuggestion {
  title: string;
  description: string;
  emoji: string;
  link: string;
  type: "video" | "activity";
}

const moods = [
  { emoji: "😊", label: "Happy", color: "mood-happy", value: "happy" },
  { emoji: "😌", label: "Calm", color: "mood-calm", value: "calm" },
  { emoji: "😰", label: "Anxious", color: "mood-anxious", value: "anxious" },
  { emoji: "😔", label: "Sad", color: "mood-sad", value: "sad" },
  { emoji: "🤩", label: "Excited", color: "mood-excited", value: "excited" },
  { emoji: "😵‍💫", label: "Overwhelmed", color: "mood-overwhelmed", value: "overwhelmed" },
];

const moodSuggestions: Record<string, MoodSuggestion[]> = {
  anxious: [
    {
      title: "🧘 Guided Meditation",
      description: "5-minute anxiety relief",
      emoji: "🧘",
      link: "https://www.youtube.com/watch?v=inpok4MKVLM",
      type: "video"
    },
    {
      title: "👃 Box Breathing Exercise",
      description: "Calm your nervous system",
      emoji: "👃",
      link: "#breathing",
      type: "activity"
    },
    {
      title: "🎵 Calming Music",
      description: "Peaceful sounds for anxiety",
      emoji: "🎵",
      link: "https://www.youtube.com/watch?v=2OEL4P1Rz04",
      type: "video"
    }
  ],
  sad: [
    {
      title: "🏃 Mood-Booster Activity",
      description: "Quick exercise to lift spirits",
      emoji: "🏃",
      link: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
      type: "video"
    },
    {
      title: "🙏 Gratitude Journal",
      description: "Focus on positive moments",
      emoji: "🙏",
      link: "#gratitude",
      type: "activity"
    },
    {
      title: "😂 Watch Funny Animals",
      description: "Instant mood lifter",
      emoji: "😂",
      link: "https://www.youtube.com/watch?v=RpZV-ETK8g8",
      type: "video"
    }
  ],
  happy: [
    {
      title: "💃 Dance Along",
      description: "Celebrate your good mood!",
      emoji: "💃",
      link: "https://www.youtube.com/watch?v=DPbWxECcDzU",
      type: "video"
    },
    {
      title: "📝 Share Your Joy",
      description: "Spread positivity to others",
      emoji: "📝",
      link: "#share",
      type: "activity"
    },
    {
      title: "🎨 Creative Expression",
      description: "Channel happiness into art",
      emoji: "🎨",
      link: "#create",
      type: "activity"
    }
  ],
  calm: [
    {
      title: "🌅 Mindful Morning",
      description: "Start your day peacefully",
      emoji: "🌅",
      link: "#mindful",
      type: "activity"
    },
    {
      title: "📚 Read Something Inspiring",
      description: "Feed your calm mind",
      emoji: "📚",
      link: "#read",
      type: "activity"
    }
  ],
  excited: [
    {
      title: "🎯 Channel Your Energy",
      description: "Use excitement productively",
      emoji: "🎯",
      link: "#channel",
      type: "activity"
    },
    {
      title: "🎪 Fun Challenges",
      description: "Try something new!",
      emoji: "🎪",
      link: "#challenges",
      type: "activity"
    }
  ],
  overwhelmed: [
    {
      title: "⏸️ Take a Break",
      description: "Step back and breathe",
      emoji: "⏸️",
      link: "#break",
      type: "activity"
    },
    {
      title: "📋 Prioritize Tasks",
      description: "Break things down",
      emoji: "📋",
      link: "#organize",
      type: "activity"
    }
  ]
};

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver();
  const { ref: moodsRef, isIntersecting: moodsVisible } = useIntersectionObserver();

  const handleMoodSelect = (moodValue: string) => {
    setSelectedMood(moodValue);
  };

  return (
    <section id="mood" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${moodBackground})` }}
      />
      <div className="absolute inset-0 bg-white/85" />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className={`text-center mb-12 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            How are you feeling today? 💭
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Share your mood and get personalized suggestions to support your mental wellness ✨
          </p>
        </div>

        {/* Mood Selection */}
        <div ref={moodsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
          {moods.map((mood, index) => (
            <Button
              key={mood.value}
              className={`h-24 flex flex-col gap-2 bg-gradient-to-br from-white to-gray-50 hover:from-purple-50 hover:to-pink-50 text-gray-800 border-2 border-gray-200 hover:border-purple-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover-lift scroll-zoom ${moodsVisible ? 'animate' : ''} ${selectedMood === mood.value ? 'ring-2 ring-purple-500 scale-105 bg-gradient-to-br from-purple-100 to-pink-100' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleMoodSelect(mood.value)}
            >
              <span className="text-3xl hover:animate-bounce">{mood.emoji}</span>
              <span className="text-sm font-medium">{mood.label}</span>
            </Button>
          ))}
        </div>

        {/* Mood Suggestions */}
        {selectedMood && moodSuggestions[selectedMood] && (
          <div className="max-w-4xl mx-auto animate-slide-up">
            <Card className="bg-white/95 backdrop-blur shadow-xl border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Perfect! Here's what might help 🌟
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {moodSuggestions[selectedMood].map((suggestion, index) => (
                    <Card key={index} className="hover:shadow-lg border-purple-200 transition-all duration-300 hover:-translate-y-1 bg-white">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{suggestion.emoji}</div>
                        <h3 className="font-semibold text-lg mb-2 text-gray-800">{suggestion.title}</h3>
                        <p className="text-gray-600 mb-4">{suggestion.description}</p>
                        <div className="flex gap-2 justify-center">
                          {suggestion.type === "video" && (
                            <Badge variant="secondary" className="text-xs">
                              <Play className="h-3 w-3 mr-1" />
                              Video
                            </Badge>
                          )}
                          <Button 
                            size="sm" 
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                            asChild
                          >
                            <a 
                              href={suggestion.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              Try This
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoodTracker;