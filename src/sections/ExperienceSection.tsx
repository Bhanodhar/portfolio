import { motion } from "framer-motion";
import { Section } from "../components/ui/section";
import { TimelineItem } from "../components/ui/timeline-item";

const experiences = [
  {
    year: "Mar 2025 - Present",
    company: "Outlier AI",
    title: "Freelance AI Trainer",
    description:
      "Improved AI model accuracy by correcting logical and factual errors in Python and Math responses. Enhanced output clarity and reliability through expert analysis and a curated dataset of 200+ complex reasoning problems.",
  },
  {
    year: "Apr 2025 - Jun 2025",
    company: "Data Valley",
    title: "Software Developer Intern",
    description:
      "Automated CI/CD pipelines using GitHub Actions for deploying web apps on AWS S3, enhancing scalability and minimizing manual work. Configured S3 buckets, IAM roles, and CloudWatch monitoring to ensure secure, high-performance deployments.",
  },
  {
    year: "Oct 2024 - Nov 2024",
    company: "Poorna Health Care Needs",
    title: "Freelance Web Developer",
    description:
      "Developed and manage a responsive website for a surgical equipment business using HTML, CSS, JavaScript, and Bootstrap. Host and maintain the site on GitHub with regular updates and performance improvements.",
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience" className="w-full">
      <div className="container mx-auto px-4 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Timeline
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A chronological view of my journey and key projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-yellow-500/0 via-yellow-500 to-yellow-500/0"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {/* Timeline Items */}
          <div className="relative z-10">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.year + experience.title}
                year={experience.year}
                company={experience.company}
                title={experience.title}
                description={experience.description}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
