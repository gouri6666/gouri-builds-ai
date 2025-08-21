import { Heart, Github, Mail, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    {
      href: "https://github.com/gouri6666/python-codes",
      icon: Github,
      label: "GitHub"
    },
    {
      href: "https://leetcode.com/u/Gouri_t",
      icon: Code,
      label: "LeetCode"
    },
    {
      href: "mailto:gouri.t.66666@gmail.com",
      icon: Mail,
      label: "Email"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Gouri T</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              AI & ML Engineering Student passionate about solving complex problems 
              through innovative technology solutions.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>🎓 Graduating in 2026</p>
              <p>🔍 Open for internships</p>
              <p>💡 Ready to collaborate</p>
              <p>📍 Karnataka, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <span>© {currentYear} Gouri T. Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="text-primary-foreground/60 text-sm">
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;