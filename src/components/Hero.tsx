import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block text-lg md:text-xl text-muted-foreground mb-2">
              Hi, I'm
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-gradient">Gouri T</span> 👋
            </h1>
          </div>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            AI & ML Engineering Student | Problem Solver | Future Innovator
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            Passionate about solving complex problems through technology, with strong skills in Python, 
            Data Structures & Algorithms, and AI/ML. I thrive on building innovative projects and creating impactful solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              variant="primary" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://drive.google.com/file/d/1qeu0VhS1XsSPB4OSB0c_dwdGk3nrkV_j/view?usp=sharing', '_blank')}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Download Resume
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#contact" className="group">
                Let's Connect
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;