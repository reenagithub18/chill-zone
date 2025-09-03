import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, MessageCircle, AlertTriangle, Heart, Clock, MapPin } from 'lucide-react';

const CrisisSupport = () => {
  const [showEmergency, setShowEmergency] = useState(false);

  const crisisResources = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support in English and Spanish",
      icon: <Phone className="h-5 w-5" />,
      available: "24/7",
      type: "Call"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free, 24/7 crisis support via text",
      icon: <MessageCircle className="h-5 w-5" />,
      available: "24/7",
      type: "Text"
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Treatment referral and information service",
      icon: <Phone className="h-5 w-5" />,
      available: "24/7",
      type: "Call"
    },
    {
      name: "LGBT National Hotline",
      number: "1-888-843-4564",
      description: "Support for LGBTQ+ individuals",
      icon: <Phone className="h-5 w-5" />,
      available: "Mon-Fri 4PM-12AM, Sat 12PM-5PM EST",
      type: "Call"
    }
  ];

  const warningSignsData = [
    "Thoughts of suicide or self-harm",
    "Feeling hopeless or trapped",
    "Extreme mood changes",
    "Withdrawing from friends and activities",
    "Increased use of alcohol or drugs",
    "Giving away prized possessions",
    "Talking about death or dying"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-red-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Crisis Support & Resources 🆘
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If you're in crisis or having thoughts of self-harm, you're not alone. 
            Help is available 24/7. Your life matters. 💜
          </p>
        </div>

        {/* Emergency Alert */}
        <Card className="mb-8 border-red-200 bg-red-50 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="text-xl font-bold text-red-800">Immediate Emergency?</h3>
                <p className="text-red-700">If you're in immediate danger, don't wait.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white flex-1"
                onClick={() => window.open('tel:911')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call 911 Emergency
              </Button>
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white flex-1"
                onClick={() => window.open('tel:988')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call 988 Suicide Prevention
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Crisis Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {crisisResources.map((resource, index) => (
            <Card key={index} className="hover-lift border-purple-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  {resource.icon}
                  {resource.name}
                  <Badge variant="secondary" className="ml-auto">
                    {resource.type}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-purple-100 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-purple-800">
                      {resource.number}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {resource.available}
                  </div>
                  <Button 
                    className="w-full bg-purple-500 hover:bg-purple-600"
                    onClick={() => {
                      if (resource.type === 'Call') {
                        window.open(`tel:${resource.number.replace(/\D/g, '')}`);
                      } else {
                        alert('Open your messaging app and text HOME to 741741');
                      }
                    }}
                  >
                    {resource.type === 'Call' ? 'Call Now' : 'Text Now'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Warning Signs */}
        <Card className="mb-8 hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Warning Signs to Watch For
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {warningSignsData.map((sign, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-orange-800">{sign}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Remember:</strong> If you or someone you know shows these signs, 
                reach out for help immediately. It's always better to be safe.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Support Message */}
        <Card className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white hover-lift">
          <CardContent className="p-8">
            <Heart className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">You Are Not Alone 💜</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Every life has value. Every person matters. If you're struggling, 
              please reach out. There are people who want to help and support you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100"
                onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Talk to AI Companion
              </Button>
              <Button 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100"
                onClick={() => window.open('tel:988')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call 988 Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CrisisSupport;