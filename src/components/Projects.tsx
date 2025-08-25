import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Database, Brain, ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Broadcast Scheduling System",
      techStack: ["Python", "Streamlit", "SQL"],
      problem: "Manual scheduling of sports broadcasts often causes conflicts and inefficiency.",
      solution: "Automated scheduling system that allocates slots based on priority, time, and availability.",
      impact: "Reduced scheduling conflicts and improved efficiency in managing multiple broadcasts.",
      icon: Calendar,
      color: "bg-blue-500/10 text-blue-600",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Intelligent To-Do List with Machine Learning",
      techStack: ["Python", "TensorFlow", "Scikit-Learn", "Flask"],
      problem: "Traditional to-do lists don't prioritize tasks effectively.",
      solution: "Smart task manager that predicts and ranks tasks using ML, with NLP-based classification of urgency and importance.",
      impact: "Improved productivity by helping users focus on critical tasks first.",
      icon: Brain,
      color: "bg-purple-500/10 text-purple-600",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Face Recognition Attendance System",
      techStack: ["Python", "OpenCV", "MySQL"],
      problem: "Manual attendance tracking is time-consuming and error-prone.",
      solution: "AI-powered attendance system with real-time face recognition integrated with MySQL.",
      impact: "Reduced attendance tracking time from ~10 minutes to under 30 seconds per class.",
      futureScope: "Add anti-spoofing detection and automated report generation.",
      icon: Database,
      color: "bg-green-500/10 text-green-600",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise through real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group card-hover bg-gradient-card border-0 shadow-medium hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${project.color} group-hover:shadow-glow transition-all duration-300`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                  {project.title}
                </h3>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 pt-0">
                {/* Problem */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    Problem
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    Solution
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Impact
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {/* Future Scope (if exists) */}
                {project.futureScope && (
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      Future Scope
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.futureScope}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-4 border-t border-border/50 space-y-3">
                  <Button 
                    variant="primary" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    View Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full group-hover:border-accent group-hover:text-accent transition-colors"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button variant="primary">
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;