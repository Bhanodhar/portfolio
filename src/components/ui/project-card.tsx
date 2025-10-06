import { motion } from "framer-motion";
import { Card } from "./card";
import { Badge } from "./badge";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full group">
        <Card.Header>
          {/* Project Image */}
          <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-lg">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 className="text-2xl font-semibold">{project.title}</h3>
        </Card.Header>

        <Card.Content>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </Card.Content>

        <Card.Footer className="flex gap-4">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-yellow-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              View Code
            </motion.a>
          )}
        </Card.Footer>
      </Card>
    </motion.div>
  );
}
