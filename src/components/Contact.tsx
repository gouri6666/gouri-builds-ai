import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Code, Send, MapPin, Coffee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gouri.t.66666@gmail.com",
      href: "mailto:gouri.t.66666@gmail.com",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8867692919",
      href: "tel:+918867692919",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/gouri6666",
      href: "https://github.com/gouri6666/python-codes",
      color: "bg-gray-500/10 text-gray-600"
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "leetcode.com/u/Gouri_t",
      href: "https://leetcode.com/u/Gouri_t",
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send a message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Let's Connect 🤝
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'd love to connect for collaborations, internships, or exciting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Coffee className="w-6 h-6 text-accent" />
                  Get In Touch
                </h3>
                <p className="text-muted-foreground">
                  Ready to discuss opportunities and build something amazing together?
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/5 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg ${info.color} group-hover:shadow-glow transition-all duration-300`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {info.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}

                <div className="pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Based in Karnataka, India</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Open to:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Internships</Badge>
                      <Badge variant="secondary">Collaborations</Badge>
                      <Badge variant="secondary">Open Source</Badge>
                      <Badge variant="secondary">Freelance</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground">
                  Send a Message
                </h3>
                <p className="text-muted-foreground">
                  Have a project in mind? Let's discuss!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hi!"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto bg-gradient-hero text-white border-0 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-white/90 mb-6">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's build something extraordinary together!
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Mail className="w-4 h-4 mr-2" />
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;