import { Button } from "@/components/ui/button";
import { Youtube, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Channel Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-primary mb-6">
            <span className="text-4xl font-bold text-background">TR</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Tech Radiator
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-1 text-primary">
              <Youtube className="w-5 h-5" />
              <span className="text-lg font-semibold">5K+ Subscribers</span>
            </div>
            <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
            <span className="text-lg text-muted-foreground">400+ Videos</span>
          </div>

          <p className="text-2xl md:text-3xl text-foreground mb-8 font-medium">
            Ek Engineer jo tech videos bhi banata hai
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Welcome to the ultimate destination for tech unboxing, reviews, and engineering insights. 
            Join our community of tech enthusiasts!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-background hover:shadow-glow-primary transition-all duration-300 animate-glow-pulse px-8 py-6 text-lg font-semibold group"
            >
              <Youtube className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Subscribe Now
              <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 px-8 py-6 text-lg"
            >
              Watch Latest Videos
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;