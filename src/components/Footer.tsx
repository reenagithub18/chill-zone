import { Button } from "@/components/ui/button";
import { Heart, Shield, Mail, Instagram, Twitter, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="hero-gradient p-2 rounded-xl">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  MindSpace 💜
                </h3>
                <p className="text-sm text-muted-foreground">You Matter</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A safe, anonymous space for Gen-Z mental health support. 
              Your wellbeing matters, and you're never alone in your journey ✨
            </p>
            <div className="privacy-badge inline-flex">
              <Shield className="h-4 w-4 mr-2" />
              Decentralized & Anonymous System
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#mood" className="hover:text-primary transition-colors">Mood Tracker 😊</a></li>
              <li><a href="#chat" className="hover:text-primary transition-colors">AI Chat 🤖</a></li>
              <li><a href="#help" className="hover:text-primary transition-colors">Professional Help 👩‍⚕️</a></li>
              <li><a href="#wellness" className="hover:text-primary transition-colors">Wellness Activities 🧘</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Crisis Hotlines 🆘</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mental Health Tips 💡</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Self-Care Guide 🌱</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community Stories 📖</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Music className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            {/* Crisis Notice */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-1">
                In crisis? Call 988 (Suicide & Crisis Lifeline) 🆘
              </p>
              <p className="text-xs text-muted-foreground">
                Available 24/7 for immediate support
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 MindSpace. Made with 💜 for Gen-Z mental wellness.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground">
            <p>
              This platform is for support and education. In case of emergency, 
              please contact emergency services or go to your nearest hospital.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;