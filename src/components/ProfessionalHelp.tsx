import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Shield, Video, MessageCircle, Phone } from "lucide-react";
import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";

const therapists = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Licensed Clinical Psychologist",
    specialties: ["Anxiety", "Depression", "Academic Stress"],
    rating: 4.9,
    reviews: 324,
    image: therapist1,
    availability: "Available Now",
    sessionTypes: ["Video", "Chat", "Phone"],
    price: "$80/session",
    description: "Specializes in helping Gen-Z navigate modern mental health challenges with evidence-based therapy.",
    languages: ["English", "Mandarin"],
    experience: "8 years",
    isOnline: true
  },
  {
    id: 2,
    name: "Dr. Maya Patel",
    title: "Licensed Marriage & Family Therapist",
    specialties: ["Relationships", "Self-Esteem", "Identity"],
    rating: 4.8,
    reviews: 267,
    image: therapist2,
    availability: "Next available: Tomorrow",
    sessionTypes: ["Video", "Chat"],
    price: "$75/session",
    description: "Culturally sensitive therapy focusing on identity, relationships, and personal growth for young adults.",
    languages: ["English", "Hindi", "Spanish"],
    experience: "6 years",
    isOnline: false
  }
];

const ProfessionalHelp = () => {
  return (
    <section id="help" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Support When You Need It 👩‍⚕️
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with licensed therapists who understand Gen-Z challenges. 
            All sessions are completely confidential and anonymous ✨
          </p>
          <div className="privacy-badge mt-4 inline-flex">
            <Shield className="h-4 w-4 mr-2" />
            Your identity remains 100% anonymous during sessions
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="text-center p-6 bounce-hover">
            <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">100% Anonymous</h3>
            <p className="text-sm text-muted-foreground">No personal info required. Use a pseudonym for complete privacy.</p>
          </Card>
          
          <Card className="text-center p-6 bounce-hover">
            <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-sm text-muted-foreground">Book sessions that fit your schedule, including evenings and weekends.</p>
          </Card>
          
          <Card className="text-center p-6 bounce-hover">
            <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
              <Video className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Multiple Formats</h3>
            <p className="text-sm text-muted-foreground">Choose from video calls, text chat, or phone sessions - whatever feels comfortable.</p>
          </Card>
        </div>

        {/* Therapist Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {therapists.map((therapist) => (
            <Card key={therapist.id} className="overflow-hidden bounce-hover border-2 border-transparent hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img 
                      src={therapist.image} 
                      alt={therapist.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    {therapist.isOnline && (
                      <Badge className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 animate-pulse">
                        Online
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{therapist.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-2">{therapist.title}</p>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(therapist.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{therapist.rating}</span>
                      <span className="text-sm text-muted-foreground">({therapist.reviews} reviews)</span>
                    </div>

                    <p className="text-sm text-primary font-medium">{therapist.availability}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{therapist.price}</p>
                    <p className="text-xs text-muted-foreground">{therapist.experience} experience</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {therapist.description}
                </p>

                {/* Specialties */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {therapist.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Languages:</h4>
                  <p className="text-sm text-muted-foreground">{therapist.languages.join(", ")}</p>
                </div>

                {/* Session Types */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Available Sessions:</h4>
                  <div className="flex gap-2">
                    {therapist.sessionTypes.map((type, index) => (
                      <Badge key={index} className="text-xs">
                        {type === "Video" && <Video className="h-3 w-3 mr-1" />}
                        {type === "Chat" && <MessageCircle className="h-3 w-3 mr-1" />}
                        {type === "Phone" && <Phone className="h-3 w-3 mr-1" />}
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Book Session Button */}
                <Button 
                  variant="therapist" 
                  size="lg" 
                  className="w-full mt-4 hover:scale-105 transition-transform"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Anonymous Session
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Take the Next Step? 🌟
            </h3>
            <p className="text-muted-foreground mb-6">
              Professional therapy can be life-changing. All our therapists are specially trained 
              to work with Gen-Z and understand the unique challenges you face.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Browse All Therapists
              </Button>
              <Button variant="outline" size="lg">
                Learn About Therapy
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHelp;