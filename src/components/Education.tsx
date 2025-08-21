import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering (AI & ML)",
      institution: "BITM, Ballari",
      period: "2022 - 2026",
      score: "CGPA 8.76",
      status: "current",
      location: "Karnataka, India",
      description: "Specialized in Artificial Intelligence and Machine Learning with focus on advanced algorithms, data science, and emerging technologies."
    },
    {
      degree: "12th Grade (Science)",
      institution: "ShreeVidyanekatan Science PU College",
      period: "2020 - 2022",
      score: "81%",
      status: "completed",
      location: "Karnataka, India",
      description: "Science stream with focus on Mathematics, Physics, and Chemistry. Strong foundation in analytical and problem-solving skills."
    },
    {
      degree: "10th Grade",
      institution: "SSBKM School",
      period: "2019 - 2020",
      score: "94%",
      status: "completed",
      location: "Karnataka, India",
      description: "Completed secondary education with distinction, demonstrating excellence in academics and extracurricular activities."
    }
  ];

  const achievements = [
    {
      title: "Gold Badge on HackerRank",
      icon: Award,
      color: "text-yellow-600 bg-yellow-500/10",
      description: "Python problem-solving expertise"
    },
    {
      title: "150+ LeetCode Problems",
      icon: Award,
      color: "text-green-600 bg-green-500/10",
      description: "Data structures & algorithms mastery"
    },
    {
      title: "Hackathon Participant",
      icon: Award,
      color: "text-blue-600 bg-blue-500/10",
      description: "Active in coding competitions"
    }
  ];

  const certifications = [
    "Python Programming Certification",
    "HTML & CSS Certification", 
    "Subject-Specific Certifications"
  ];

  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Education & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic excellence and continuous learning journey
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Education</h3>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline line */}
                {index < educationData.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-accent to-transparent" />
                )}
                
                <Card className="ml-16 bg-gradient-card border-0 shadow-medium hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Timeline dot */}
                    <div className="absolute -left-10 top-6 flex items-center justify-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        edu.status === 'current' ? 'bg-accent shadow-glow' : 'bg-primary'
                      }`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-accent mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4 text-muted-foreground text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
                          edu.status === 'current' 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {edu.score}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-subtle hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${achievement.color}`}>
                        <achievement.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Certifications</h3>
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground text-center">
                    Committed to continuous learning and professional development
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;