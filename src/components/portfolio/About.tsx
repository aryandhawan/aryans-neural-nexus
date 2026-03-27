export function About() {
  const gradientText = {
    background: "var(--gradient-hero-text)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <section id="about" className="relative z-10 py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Drives{" "}
            <span style={gradientText}>the Architecture.</span>
          </h2>
        </div>

        {/* Two-pillar cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pillar 1: First Principles */}
          <div className="card-glass rounded-2xl p-8 border border-primary/15 transition-all duration-300 hover:border-primary/40 hover:shadow-purple-glow-sm flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-5 text-foreground">
              The First Principles{" "}
              <span style={gradientText}>Approach.</span>
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
              I don't just import libraries; I architect systems. As a Founder, I bridge the gap
              between deep research and commercial viability. From automating intricate workflows to
              deploying scalable ML pipelines, I rebuild complex architectures from the ground up to
              solve real-world problems with engineering rigor.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { value: "10+", label: "Projects Built" },
                { value: "5+", label: "ML Domains" },
                { value: "∞", label: "Curiosity" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-center"
                >
                  <div className="text-xl font-black" style={gradientText}>
                    {s.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 2: Leverage of Autonomy */}
          <div className="card-glass rounded-2xl p-8 border border-primary/15 transition-all duration-300 hover:border-primary/40 hover:shadow-purple-glow-sm flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-5 text-foreground">
              The Leverage of{" "}
              <span style={gradientText}>Autonomy.</span>
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              I don't compete on headcount; I compete on architecture. My leverage is the ability to
              build autonomous, agentic SaaS products that operate with high-precision and zero human
              friction. While most are content building "wrappers," I build the engines—integrating
              MLOps rigor with a founder's commercial vision. I believe in the power of the{" "}
              <span className="text-foreground font-medium">Sovereign Engineer</span>: the one who
              can architect, deploy, and scale systems that provide 10x value with 1x overhead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
