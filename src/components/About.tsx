import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Smartphone, Monitor, Wrench, Award, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Subscribers", value: "5K+", color: "text-primary" },
    { icon: Monitor, label: "Videos", value: "400+", color: "text-accent" },
    { icon: Award, label: "Years", value: "3+", color: "text-primary" },
  ];

  const expertise = [
    { icon: Smartphone, title: "Mobile Tech", description: "Latest smartphones, tablets, and accessories" },
    { icon: Cpu, title: "Computing", description: "Laptops, PCs, and performance analysis" },
    { icon: Wrench, title: "Engineering", description: "Technical insights from an engineer's perspective" },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              About Tech Radiator
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Where engineering meets technology reviews
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Hi, I'm the Engineer behind Tech Radiator! 👋
                </h3>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Welcome to Tech Radiator, where I combine my engineering background 
                    with a passion for technology to bring you honest, detailed reviews 
                    and unboxings of the latest tech products.
                  </p>
                  
                  <p>
                    As an engineer, I approach every review with a technical mindset, 
                    diving deep into specifications, build quality, and real-world 
                    performance. Whether it's the latest flagship smartphone or budget 
                    tech that punches above its weight, I'm here to help you make 
                    informed decisions.
                  </p>
                  
                  <p>
                    My channel focuses on tech that matters to students, professionals, 
                    and enthusiasts who want honest opinions without the marketing fluff.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-card/50 border-border text-center p-4">
                    <CardContent className="p-0">
                      <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Profile Image and Expertise */}
            <div className="space-y-8">
              {/* Profile Placeholder */}
              <Card className="bg-gradient-primary p-8 text-center">
                <CardContent className="p-0">
                  <div className="w-32 h-32 mx-auto bg-background/20 rounded-full flex items-center justify-center mb-4">
                    <Cpu className="w-16 h-16 text-background" />
                  </div>
                  <h4 className="text-xl font-bold text-background mb-2">
                    Tech Enthusiast & Engineer
                  </h4>
                  <p className="text-background/80">
                    Bridging the gap between technical expertise and consumer insights
                  </p>
                </CardContent>
              </Card>

              {/* Expertise Areas */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-foreground mb-4">What I Cover</h4>
                {expertise.map((item, index) => (
                  <Card key={index} className="bg-card/50 border-border p-4">
                    <CardContent className="p-0 flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">{item.title}</h5>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <Card className="mt-16 bg-secondary/30 border-border p-8">
            <CardContent className="p-0 text-center">
              <Badge className="bg-primary text-primary-foreground mb-4 text-sm px-4 py-2">
                Mission
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Making Technology Accessible Through Engineering Perspective
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                My goal is to demystify technology by providing clear, honest reviews that help 
                you understand not just what a product does, but how it works and whether it's 
                worth your investment. Every video is crafted with the precision of an engineer 
                and the curiosity of a tech enthusiast.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;