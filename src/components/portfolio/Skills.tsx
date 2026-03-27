const skillGroups = [
  {
    category: "AI & Agentic Systems",
    icon: "🧠",
    skills: ["PyTorch", "LangGraph", "CrewAI", "Hugging Face", "LangChain"],
  },
  {
    category: "MLOps & Data Lineage",
    icon: "📊",
    skills: ["DagsHub", "MLflow", "DVC", "Apache Airflow"],
  },
  {
    category: "Infrastructure & Cloud",
    icon: "☁️",
    skills: ["AWS", "Azure", "Docker", "Linux"],
  },
  {
    category: "Backend Architecture",
    icon: "⚡",
    skills: ["FastAPI", "PostgreSQL", "Redis", "Streamlit"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Technical Arsenal
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tools I Build{" "}
            <span
              style={{
                background: "var(--gradient-hero-text)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Intelligence With.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card-glass rounded-2xl p-7 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-sm font-semibold text-foreground/80 tracking-wide">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold border border-primary/30 text-primary cursor-default transition-all duration-200 hover:border-primary/70 hover:bg-primary/15 hover:shadow-purple-glow-sm hover:scale-105"
                    style={{ backgroundColor: "hsl(var(--primary) / 0.08)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
