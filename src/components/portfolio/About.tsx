export function About() {
  return (
    <section id="about" className="relative z-10 py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: decorative */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-64 h-64">
            {/* Concentric glowing rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-glow-pulse" />
            <div className="absolute inset-4 rounded-full border border-primary/20" />
            <div className="absolute inset-8 rounded-full border border-primary/15" />
            {/* Center circle */}
            <div
              className="absolute inset-12 rounded-full flex items-center justify-center text-5xl font-black text-white"
              style={{ background: "var(--gradient-purple)" }}
            >
              A
            </div>
            {/* Floating dots */}
            <div className="absolute top-2 right-8 w-3 h-3 rounded-full bg-primary/60 animate-float" />
            <div className="absolute bottom-6 left-4 w-2 h-2 rounded-full bg-primary/40 animate-float [animation-delay:1s]" />
            <div className="absolute top-12 left-0 w-1.5 h-1.5 rounded-full bg-primary/50 animate-float [animation-delay:2s]" />
          </div>
        </div>

        {/* Right: text */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-foreground">
            The First Principles{" "}
            <span
              style={{
                background: "var(--gradient-hero-text)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Approach.
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            I don't just import libraries; I understand the math and logic beneath them. My passion
            for the AI/ML industry is driven by a deep curiosity to break down complex architectures
            and rebuild them.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I write code to{" "}
            <span className="text-foreground font-medium">learn</span>,{" "}
            <span className="text-foreground font-medium">to optimize</span>, and to{" "}
            <span className="text-foreground font-medium">solve real-world problems</span> from the
            ground up.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: "10+", label: "Projects Built" },
              { value: "5+", label: "ML Domains" },
              { value: "∞", label: "Curiosity" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center"
              >
                <div
                  className="text-2xl font-black"
                  style={{
                    background: "var(--gradient-hero-text)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
