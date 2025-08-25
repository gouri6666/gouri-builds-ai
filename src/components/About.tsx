import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Proficient in Python, AI/ML, and modern web technologies"
    },
    {
      icon: Brain,
      title: "Problem Solver",
      description: "Strong analytical thinking and algorithmic problem-solving skills"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent communication and collaborative leadership abilities"
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "Passionate about creating impactful technological solutions"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my journey in AI & Machine Learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-slide-up">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                I am a Bachelor of Engineering student in <span className="font-semibold text-accent">Artificial Intelligence & Machine Learning</span> at BITM, Ballari (graduating in 2026).
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                I'm passionate about <span className="font-semibold text-accent">solving problems with Python, Data Structures & Algorithms, and AI/ML</span>. I enjoy building impactful projects, participating in hackathons, and collaborating on innovative ideas.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                I thrive on creating solutions that make a difference and am always eager to learn new technologies and tackle challenging problems.
              </p>

              <div className="pt-4">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  <Target className="w-4 h-4" />
                  Currently seeking internship opportunities
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {highlights.map((highlight, index) => (
              <Card key={index} className="group card-hover bg-gradient-card border-0 shadow-subtle">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4 group-hover:shadow-glow transition-all duration-300">
                    <highlight.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;