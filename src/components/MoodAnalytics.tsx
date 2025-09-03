import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calendar, BarChart3, Heart } from 'lucide-react';

interface MoodData {
  date: string;
  mood: string;
  score: number;
}

const MoodAnalytics = () => {
  const [moodHistory, setMoodHistory] = useState<MoodData[]>([]);
  const [currentStreak, setCurrentStreak] = useState(7);

  useEffect(() => {
    // Simulate mood data
    const generateMoodData = () => {
      const moods = ['happy', 'calm', 'anxious', 'sad', 'excited', 'overwhelmed'];
      const scores = { happy: 5, excited: 5, calm: 4, sad: 2, anxious: 2, overwhelmed: 1 };
      const data: MoodData[] = [];
      
      for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const mood = moods[Math.floor(Math.random() * moods.length)];
        data.push({
          date: date.toISOString().split('T')[0],
          mood,
          score: scores[mood as keyof typeof scores]
        });
      }
      return data;
    };

    setMoodHistory(generateMoodData());
  }, []);

  const averageScore = moodHistory.length > 0 
    ? (moodHistory.reduce((sum, entry) => sum + entry.score, 0) / moodHistory.length).toFixed(1)
    : '0';

  const moodCounts = moodHistory.reduce((acc, entry) => {
    acc[entry.mood] = (acc[entry.mood] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topMood = Object.entries(moodCounts).sort(([,a], [,b]) => b - a)[0];

  const getScoreColor = (score: number) => {
    if (score >= 4) return 'bg-green-500';
    if (score >= 3) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getMoodEmoji = (mood: string) => {
    const emojis = {
      happy: '😊', calm: '😌', anxious: '😰', 
      sad: '😔', excited: '🤩', overwhelmed: '😵💫'
    };
    return emojis[mood as keyof typeof emojis] || '😐';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Your Mental Wellness Journey 📊💜
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Track your progress and celebrate your growth. Every mood matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Average Score */}
          <Card className="text-center hover-lift">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Average Wellness</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600 mb-2">{averageScore}/5</div>
              <div className="flex justify-center">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>

          {/* Current Streak */}
          <Card className="text-center hover-lift">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Check-in Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600 mb-2">{currentStreak}</div>
              <div className="text-sm text-gray-500">days 🔥</div>
            </CardContent>
          </Card>

          {/* Top Mood */}
          <Card className="text-center hover-lift">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Most Common Mood</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl mb-2">{getMoodEmoji(topMood?.[0] || 'happy')}</div>
              <div className="text-sm font-medium capitalize">{topMood?.[0] || 'Happy'}</div>
            </CardContent>
          </Card>

          {/* Total Entries */}
          <Card className="text-center hover-lift">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Total Check-ins</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-pink-600 mb-2">{moodHistory.length}</div>
              <div className="flex justify-center">
                <Heart className="h-5 w-5 text-pink-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mood Chart */}
        <Card className="mb-8 hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              30-Day Mood Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-1 min-w-max mb-4">
                {moodHistory.slice(-30).map((entry, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className={`w-6 h-16 rounded-t-lg ${getScoreColor(entry.score)} mb-2 transition-all hover:scale-110`}
                      title={`${entry.date}: ${entry.mood} (${entry.score}/5)`}
                    />
                    <div className="text-xs text-gray-500 w-6 text-center">
                      {new Date(entry.date).getDate()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Good (4-5)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <span>Okay (3)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span>Tough (1-2)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insights */}
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Your Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🌟 Positive Trend</h4>
                <p className="text-sm text-green-700">
                  You've had {moodHistory.filter(m => m.score >= 4).length} great days this month! 
                  Keep up the amazing work.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">💪 Growth Opportunity</h4>
                <p className="text-sm text-blue-700">
                  Consider trying meditation on days when you feel overwhelmed. 
                  Small steps lead to big changes!
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                🎉 You're doing great! Every check-in is progress 💜
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MoodAnalytics;