import { motion } from "framer-motion";
import { Section } from "../components/ui/section";
import { Badge } from "../components/ui/badge";
import {
  Code2,
  Database,
  Wrench,
  Globe,
  Server,
  BarChart3,
} from "lucide-react";

const skillCategories = [
  
  {
    title: "Programming & Languages",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML"],
  },
  {
    title: "Frontend Libraries & Frameworks",
    icon: Globe,
    skills: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "Three.js",
      "Material-UI",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    title: "Backend & Frameworks",
    icon: Server,
    skills: ["Node.js", "Express.js", "Django (Familiar)", "RESTful APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "GitHub Pages",
      "Vercel",
      "Postman",
      "Thunder Client",
    ],
  },
  {
    title: "Analytical Tools",
    icon: BarChart3,
    skills: ["Power BI", "MS Excel", "Tableau"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function AboutSection() {
  return (
    <Section id="about" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 animate-spin-slow" />
              <img
                src="/profile3.jpg"
                alt="Bhanu"
                className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <div className="space-y-6">
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I'm a passionate Full Stack Developer with a focus on building
              scalable web applications. With a strong foundation in both
              frontend and backend technologies, I love turning complex problems
              into simple, beautiful solutions.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Currently, I'm exploring AI integrations and cloud-native
              architectures to build more intelligent and resilient
              applications.
            </motion.p>
          </div>
        </div>

        {/* Skills */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge
                        key={`${category.title}-${skill}`}
                        className={`text-sm ${
                          skillIdx % 2 === 0
                            ? "bg-yellow-500 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
