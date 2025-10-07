  import "./App.css";
  import { useTheme } from "./contexts/ThemeContext";
  import { Sun, Moon } from "lucide-react";
  import { SmoothScrollContainer } from "./components/layout/SmoothScrollContainer";
  import { motion } from "framer-motion";
  import { HeroSection } from "./sections/HeroSection";
  import { AboutSection } from "./sections/AboutSection";
  import { ProjectsSection } from "./sections/ProjectsSection";
  import { ExperienceSection } from "./sections/ExperienceSection";
  import { ContactSection } from "./sections/ContactSection";
  import { Footer } from "./components/layout/Footer";

  function App() {
    const { theme, toggleTheme } = useTheme();

    return (
      <div className="min-h-screen bg-background text-light-text dark:bg-dark-background dark:text-dark-text">
        <SmoothScrollContainer>
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 p-2 rounded-full bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-yellow-500" />
            )}
          </motion.button>

          {/* Main Content */}
          <main className="space-y-24 md:space-y-32 pb-24">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
            <Footer />
          </main>
        </SmoothScrollContainer>
      </div>
    );
  }

  export default App;
