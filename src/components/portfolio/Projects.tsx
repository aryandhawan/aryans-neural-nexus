import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Versa AI",
    badge: "Featured",
    tags: ["PyTorch", "FastAPI", "NLP", "ML Backend"],
    description:
      "Versa AI brings the future of dynamic human-computer interaction into the palm of your hand. Engineered from first principles, this architecture seamlessly transitions between distinct, highly defined AI personalities in real-time without losing contextual awareness. Powered by an optimized ML backend, it moves beyond rigid, single-track chatbots to deliver a fluid, hyper-personalized cognitive engine.",
    emoji: "🤖",
    gradient: "from-purple-700 via-purple-500 to-purple-800",
  },
  {
    title: "Predictive Analytics Suite",
    badge: "Data Science",
    tags: ["Scikit-Learn", "Pandas", "XGBoost", "Streamlit"],
    description:
      "End-to-end machine learning models including Customer Churn prediction, Titanic Survival classification, and Loan Approval predictors. Each model is carefully engineered with feature selection, hyperparameter tuning, and full deployment pipelines.",
    emoji: "📈",
    gradient: "from-purple-900 via-purple-700 to-purple-600",
  },
  {
    title: "NLP & Recommendation Engine",
    badge: "NLP",
    tags: ["NLTK", "TF-IDF", "Collaborative Filtering", "Python"],
    description:
      "Financial Sentiment Analysis pipeline, Spam Classification with high precision recall, and an algorithmic Recommender System built from first principles using collaborative and content-based filtering approaches.",
    emoji: "💬",
    gradient: "from-purple-800 via-purple-600 to-purple-900",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative z-10 py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The{" "}
            <span
              style={{
                background: "var(--gradient-hero-text)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Toy Box.
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
            Projects built from scratch. Every line written to understand, not just to ship.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group card-glass rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
            >
              {/* Card top banner */}
              <div
                className={`h-32 bg-gradient-to-br ${p.gradient} flex items-center justify-center text-5xl relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_white_0%,_transparent_70%)]" />
                <span className="relative z-10 animate-float">{p.emoji}</span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Badge + title */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5">
                      {p.badge}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-2 leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors duration-200 mt-1 flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full border border-border/60 text-muted-foreground bg-muted/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
