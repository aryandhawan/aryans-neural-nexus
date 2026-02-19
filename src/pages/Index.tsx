import { NeuralBackground } from "@/components/NeuralBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated neural network background */}
      <NeuralBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
