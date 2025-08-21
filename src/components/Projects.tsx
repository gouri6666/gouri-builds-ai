import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Database, Brain, ExternalLink, GitBranch } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Broadcast Scheduling System",
      description: "A comprehensive system for managing and scheduling broadcast content with real-time updates and conflict resolution.",
      techStack: ["Python", "Streamlit", "SQL", "Pandas"],
      icon: Calendar,
      color: "bg-blue-500/10 text-blue-600",
      features: ["Real-time scheduling", "Conflict detection", "User-friendly interface"]
    },
    {
      title: "Smart To-Do List (ML-Powered)",
      description: "An intelligent task management system that uses machine learning to prioritize tasks and predict completion times.",
      techStack: ["Python", "TensorFlow", "Scikit-Learn", "Flask"],
      icon: Brain,
      color: "bg-purple-500/10 text-purple-600",
      features: ["AI task prioritization", "Completion prediction", "Smart categorization"]
    },
    {
      title: "Face Recognition Attendance System",
      description: "Automated attendance tracking system using computer vision and facial recognition technology for accurate student monitoring.",
      techStack: ["Python", "OpenCV", "MySQL", "Face Recognition"],
      icon: Database,
      color: "bg-green-500/10 text-green-600",
      features: ["Real-time recognition", "Database integration", "Attendance analytics"]
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

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group card-hover bg-gradient-card border-0 shadow-medium animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${project.color} group-hover:shadow-glow transition-all duration-300`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
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
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-accent group-hover:text-accent transition-colors"
                  >
                    <GitBranch className="w-4 h-4 mr-2" />
                    Learn More
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
            <GitBranch className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;