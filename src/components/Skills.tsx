import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Database, Cloud, Lightbulb, Users } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    "Python", "C", "Java (Basics)", "MySQL", "Scikit-Learn", "Pandas",
    "HTML", "CSS", "JavaScript", "AWS Cloud", "Automata Theory", "Compiler Design"
  ];

  const softSkills = [
    "Problem Solving", "Analytical Thinking", "Leadership", 
    "Communication", "Time Management", "Team Collaboration"
  ];

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "C", "Java", "JavaScript"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["Scikit-Learn", "TensorFlow", "Pandas", "Data Analysis"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Database,
      title: "Database & Backend",
      skills: ["MySQL", "Flask", "API Development"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Cloud,
      title: "Web & Cloud",
      skills: ["HTML", "CSS", "AWS", "Streamlit"],
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and soft skills
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group card-hover bg-gradient-card border-0 shadow-subtle animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${category.color} group-hover:shadow-glow transition-all duration-300`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="mr-1 mb-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="bg-gradient-card border-0 shadow-medium animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Code2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Technical Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="hover:bg-accent/10 hover:border-accent transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="bg-gradient-card border-0 shadow-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Soft Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="hover:bg-primary/10 hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;