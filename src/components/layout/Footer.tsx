import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bhanodharpenagaluru",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Bhanodhar",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:bhanodhar@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="w-full py-8 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Your Name. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
