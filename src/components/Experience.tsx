import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Target, ArrowRight } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Experience & Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to apply academic knowledge in real-world environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-medium animate-slide-up">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
                <Briefcase className="w-10 h-10 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Currently Seeking Opportunities
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Currently seeking internships and opportunities to apply academic knowledge and project experience in real-world environments. Ready to contribute to innovative teams and grow professionally.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Goal-Oriented</h4>
                  <p className="text-sm text-muted-foreground text-center">
                    Focused on delivering results and meeting project objectives
                  </p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Team Player</h4>
                  <p className="text-sm text-muted-foreground text-center">
                    Excellent collaboration and communication skills
                  </p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-3">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Ready to Learn</h4>
                  <p className="text-sm text-muted-foreground text-center">
                    Eager to gain practical experience and industry knowledge
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="primary" size="lg" asChild>
                  <a href="#contact">
                    Let's Discuss Opportunities
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.open('https://drive.google.com/file/d/1qeu0VhS1XsSPB4OSB0c_dwdGk3nrkV_j/view?usp=sharing', '_blank')}
                >
                  Download My Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;