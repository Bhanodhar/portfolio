import "./App.css";import "./App.css";

import { useTheme } from "./contexts/ThemeContext";import { useTheme } from "./contexts/ThemeContext";

import { Sun, Moon } from "lucide-react";import { Sun, Moon } from "lucide-react";

import { SmoothScrollContainer } from "./components/layout/SmoothScrollContainer";import { SmoothScrollContainer } from "./components/layout/SmoothScrollContainer";

import { motion } from "framer-motion";import { motion } from "framer-motion";

import { HeroSection } from "./sections/HeroSection";import { HeroSection } from "./sections/HeroSection";

import { AboutSection } from "./sections/AboutSection";import { AboutSection } from "./sections/AboutSection";

import { ProjectsSection } from "./sections/ProjectsSection";import { ProjectsSection } from "./sections/ProjectsSection";

import { ExperienceSection } from "./sections/ExperienceSection";import { ExperienceSection } from "./sections/ExperienceSection";

import { ContactSection } from "./sections/ContactSection";

import { Footer } from "./components/layout/Footer";import { ContactSection } from "./sections/ContactSection";

import { Footer } from "./components/layout/Footer";

function App() {

  const { theme, toggleTheme } = useTheme();function App() {

  const { theme, toggleTheme } = useTheme();

  return (

    <SmoothScrollContainer>  return (

      <main className="min-h-screen bg-background text-light-text dark:bg-dark-background dark:text-dark-text">    <SmoothScrollContainer>

        {/* Theme Toggle Button */}      <main className="min-h-screen bg-background text-light-text dark:bg-dark-background dark:text-dark-text">

        <motion.button        {/* Theme Toggle */}

          onClick={toggleTheme}        <motion.button

          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors"          onClick={toggleTheme}

          whileHover={{ scale: 1.1 }}          className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 z-50"

          whileTap={{ scale: 0.9 }}          aria-label="Toggle theme"

        >          whileHover={{ scale: 1.1 }}

          {theme === "dark" ? (          whileTap={{ scale: 0.9 }}

            <Sun className="w-6 h-6 text-yellow-500" />        >

          ) : (          {theme === "dark" ? (

            <Moon className="w-6 h-6 text-yellow-500" />            <Sun className="w-5 h-5" />

          )}          ) : (

        </motion.button>            <Moon className="w-5 h-5" />

          )}

        {/* Main Content */}        </motion.button>

        <div className="space-y-24 md:space-y-32 pb-24">

          <HeroSection />        {/* Hero Section */}

          <AboutSection />        <HeroSection />

          <ProjectsSection />

          <ExperienceSection />        {/* Placeholder sections - we'll implement these next */}

          <ContactSection />        <AboutSection />

        </div>

        <ProjectsSection />

        <Footer />

      </main>        <ExperienceSection />

    </SmoothScrollContainer>

  );        <ContactSection />

}

        <Footer />

export default App;      </main>
    </SmoothScrollContainer>
  );
}

export default App;
