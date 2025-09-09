import Hero from "@/components/Hero";
import VideoGrid from "@/components/VideoGrid";
import About from "@/components/About";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <VideoGrid />
      <About />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Index;
