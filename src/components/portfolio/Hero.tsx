import { Github, Linkedin, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-8 animate-fade-up opacity-0 [animation-delay:0.1s]">
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          Available for opportunities
        </div>

        {/* Main headline */}
        <h1
          className="text-[clamp(4rem,14vw,9rem)] font-black leading-none tracking-tighter mb-4 animate-fade-up opacity-0 [animation-delay:0.2s]"
          style={{
            background: "var(--gradient-hero-text)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Aryan Dhawan.
        </h1>

        {/* Sub-headline */}
        <p className="text-[clamp(1rem,2.5vw,1.35rem)] font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up opacity-0 [animation-delay:0.35s]">
          Building AI from the ground up.{" "}
          <span className="text-foreground font-medium">Deep Learning Engineer</span> &{" "}
          <span className="text-foreground font-medium">Data Scientist.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up opacity-0 [animation-delay:0.5s]">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-purple-glow-lg"
            style={{ background: "var(--gradient-purple)" }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full font-semibold text-sm border border-primary/60 text-primary bg-transparent hover:bg-primary/10 hover:border-primary hover:shadow-purple-glow-sm transition-all duration-300 hover:scale-105"
          >
            Hire Me / Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 justify-center animate-fade-up opacity-0 [animation-delay:0.65s]">
          <a
            href="https://github.com/aryandhawan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:shadow-purple-glow-sm transition-all duration-300">
              <Github className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium hidden sm:block">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-dhawan-40760a160/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:shadow-purple-glow-sm transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium hidden sm:block">LinkedIn</span>
          </a>
        </div>

        {/* Scroll indicator — sits between socials and the next section */}
        <div className="flex flex-col items-center gap-2 mt-12 animate-float opacity-60">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
