import { ThemeToggle } from "@/components/ThemeToggle";
import { Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-gradient">
          Aryan Dhawan.
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/aryandhawan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-border/60 bg-background/40 hover:border-primary/60 hover:bg-primary/10 transition-all duration-200"
          >
            <Github className="w-4 h-4 text-foreground/70 hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-dhawan-40760a160/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-border/60 bg-background/40 hover:border-primary/60 hover:bg-primary/10 transition-all duration-200"
          >
            <Linkedin className="w-4 h-4 text-foreground/70 hover:text-primary transition-colors" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
