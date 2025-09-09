import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Youtube, 
  Instagram, 
  Twitter, 
  Mail, 
  ExternalLink,
  MessageCircle
} from "lucide-react";

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: "YouTube",
      icon: Youtube,
      handle: "@techradiator",
      followers: "5K+ Subscribers",
      description: "Tech reviews, unboxings & engineering insights",
      color: "hover:bg-red-500/10 hover:border-red-500 hover:text-red-500",
      link: "#"
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@tech_radiator",
      followers: "2K+ Followers",
      description: "Behind the scenes & quick tech tips",
      color: "hover:bg-pink-500/10 hover:border-pink-500 hover:text-pink-500",
      link: "#"
    },
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@techradiator",
      followers: "1.5K+ Followers",
      description: "Tech news & quick thoughts",
      color: "hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-500",
      link: "#"
    },
    {
      name: "Email",
      icon: Mail,
      handle: "contact@techradiator.com",
      followers: "Business Inquiries",
      description: "For collaborations & partnerships",
      color: "hover:bg-green-500/10 hover:border-green-500 hover:text-green-500",
      link: "mailto:contact@techradiator.com"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Connect With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our community across all platforms and stay updated with the latest tech content
            </p>
          </div>

          {/* Social Platform Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {socialPlatforms.map((platform, index) => (
              <Card 
                key={platform.name}
                className={`group bg-card border-border transition-all duration-300 cursor-pointer ${platform.color} animate-fade-in`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 bg-muted rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <platform.icon className="w-6 h-6" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{platform.name}</h3>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      
                      <p className="text-primary font-semibold mb-1">{platform.handle}</p>
                      <p className="text-sm text-muted-foreground mb-2">{platform.followers}</p>
                      <p className="text-sm text-muted-foreground">{platform.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-card border-border p-8">
            <CardContent className="p-0 text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Build Something Together
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Have a collaboration idea, product suggestion, or just want to say hi? 
                I'd love to hear from you! Drop me a message on any platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-primary text-background hover:shadow-glow-primary transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow on Instagram
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card className="mt-8 bg-secondary/30 border-border p-6">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    Stay Updated
                  </h4>
                  <p className="text-muted-foreground">
                    Get notified about new videos and tech insights
                  </p>
                </div>
                
                <div className="flex gap-3 w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 md:w-64 px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:border-primary transition-colors"
                  />
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;