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
    <SmoothScrollContainer>
      <main className="min-h-screen bg-background text-light-text dark:bg-dark-background dark:text-dark-text">
        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 z-50"
          aria-label="Toggle theme"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </motion.button>

        {/* Hero Section */}
        <HeroSection />

        {/* Placeholder sections - we'll implement these next */}
        <AboutSection />

        <ProjectsSection />

        <ExperienceSection />

        <ContactSection />

        <Footer />
      </main>
    </SmoothScrollContainer>
  );
}

export default App;
