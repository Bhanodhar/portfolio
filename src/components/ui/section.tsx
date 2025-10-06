import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
}

export function Section({ id, className, children, title }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("section-container", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      )}
      {children}
    </motion.section>
  );
}
