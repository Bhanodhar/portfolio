import { motion } from "framer-motion";
import { Background3D } from "../components/3d/Background3D";
import { Typewriter } from "../components/animations/Typewriter";
import { Section } from "../components/ui/section";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      <Background3D />
      <motion.div
        className="z-10 max-w-3xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-4"
          variants={itemVariants}
        >
          Hi, I'm <span className="heading-gradient">Bhanodhar Penagaluru</span>{" "}
          <span className="wave-emoji" role="img" aria-label="waving hand">
            👋
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 mb-8"
          variants={itemVariants}
        >
          Full Stack Developer | Turning Ideas on Paper into Functional Web
          Products
        </motion.p>

        <motion.div
          className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 mb-12"
          variants={itemVariants}
        >
          <Typewriter
            words={[
              "MongoDB",
              "Express JS",
              "React JS",
              "Node.js",
              "AI Integrations",
            ]}
            delay={5000}
          />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="btn-primary w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-500 flex justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </Section>
  );
}

// Add wave animation to the hand emoji
const waveStyle = `
  .wave-emoji {
    display: inline-block;
    animation: wave 2.5s infinite;
    transform-origin: 70% 70%;
  }

  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }
`;

// Add the style to the document head
const styleSheet = document.createElement("style");
styleSheet.textContent = waveStyle;
document.head.appendChild(styleSheet);
