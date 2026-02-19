import { useState } from "react";
import { Github, Linkedin, Send, Mail, Phone } from "lucide-react";

export function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens default mail client as fallback
    window.location.href = `mailto:Aryandhawan2802@gmail.com?subject=Portfolio Contact - ${form.name}&body=${encodeURIComponent(form.message)}`;
    setSent(true);
  };

  return (
    <footer id="contact" className="relative z-10 py-28 px-6 border-t border-border/40">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Let's connect
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Got an idea?{" "}
              <span
                style={{
                  background: "var(--gradient-hero-text)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Let's build it.
              </span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
              Whether you're a recruiter, a fellow engineer, or someone with a problem worth solving —
              my inbox is always open.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="mailto:Aryandhawan2802@gmail.com"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 shrink-0" />
                Aryandhawan2802@gmail.com
              </a>
              <a
                href="tel:+917359563504"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +91 73595 63504
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://github.com/aryandhawan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border/60 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 hover:shadow-purple-glow-sm transition-all duration-300"
              >
                <Github className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/aryan-dhawan-40760a160/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border/60 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 hover:shadow-purple-glow-sm transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="card-glass rounded-2xl p-7">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: "var(--gradient-purple)" }}>
                  ✉️
                </div>
                <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">Your mail client should have opened. Talk soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/70 text-foreground text-sm placeholder:text-muted-foreground/50 outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/70 text-foreground text-sm placeholder:text-muted-foreground/50 outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me what you're building..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/70 text-foreground text-sm placeholder:text-muted-foreground/50 outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-glow"
                  style={{ background: "var(--gradient-purple)" }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aryan Dhawan. Built with curiosity & first principles.
          </p>
          <p
            className="text-xs font-semibold"
            style={{
              background: "var(--gradient-hero-text)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI / ML Engineer · Data Scientist
          </p>
        </div>
      </div>
    </footer>
  );
}
