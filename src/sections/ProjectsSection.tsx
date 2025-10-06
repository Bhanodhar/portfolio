import { motion } from "framer-motion";
import { Section } from "../components/ui/section";
import { ProjectCard } from "../components/ui/project-card";
import type { Project } from "../types/project";

// Sample projects data - replace with your actual projects
const projects: Project[] = [
  {
    id: "1",
    title: "Coursequest-lite",
    description:
      "Built a full-stack course platform using modern PERN stack. Implemented an AI-powered natural language search engine achieving 95% query accuracy. Features include course comparison tool, responsive design, and real-time search suggestions. Reduced user decision-making time by 40% through intuitive UI/UX design.",
    techStack: [
      "PostgreSQL",
      "Express.js",
      "React",
      "Node.js",
      "NLP(AI)",
      "Tailwind CSS",
      "REST API",
    ],
    imageUrl: "/projects/show courses.png",
    liveUrl: "https://coursequest-lite-rust.vercel.app",
    githubUrl: "https://github.com/Bhanodhar/coursequest-lite",
    featured: true,
  },
  {
    id: "2",
    title: "Food Vendor Dashboard",
    description:
      "Developed a comprehensive vendor management system using MERN stack. Implemented secure JWT authentication, file upload system, and real-time inventory tracking. Built an intuitive dashboard for vendors to manage multiple firms, products, and analytics. Features responsive design and optimized database queries.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Redux",
      "Material-UI",
    ],
    imageUrl: "/projects/welcome.png",
    liveUrl: "https://vendor-dashboard-frontend-five.vercel.app",
    githubUrl: "https://github.com/Bhanodhar/VENDOR_DASHBOARD_FRONTEND",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "Designed and developed a modern portfolio website using React and Vite. Features include dark mode, smooth animations with Framer Motion, responsive design, and interactive components. Implemented modern design patterns and optimized for performance and accessibility.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Lucide Icons",
    ],
    imageUrl: "/projects/portfolio.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Bhanodhar",
    featured: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function ProjectsSection() {
  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Projects I'm Proud Of
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills and
            passion for building great software Web Applications.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Bhanodhar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-500"
          >
            View more projects on GitHub →
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
