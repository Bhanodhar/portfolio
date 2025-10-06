import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface TimelineItemProps {
  year: string;
  company: string;
  title: string;
  description: string;
  index: number;
  isLeft?: boolean;
}

export function TimelineItem({
  year,
  company,
  title,
  description,
  index,
  isLeft = true,
}: TimelineItemProps) {
  return (
    <motion.div
      className={cn(
        "flex items-center w-full",
        isLeft ? "justify-start" : "justify-end",
        "my-8 first:mt-0 last:mb-0"
      )}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <div
        className={cn(
          "w-full md:w-[45%] flex",
          isLeft ? "flex-row" : "flex-row-reverse"
        )}
      >
        {/* Year */}
        <div className="w-16 flex-shrink-0 flex items-center justify-center">
          <div className="text-yellow-500 font-bold">{year}</div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div
            className={cn(
              "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md",
              "border border-gray-200 dark:border-gray-700",
              "transform transition-transform duration-300 hover:-translate-y-1"
            )}
          >
            <h3 className="text-lg font-semibold mb-1">{company}</h3>
            <h4 className="text-md text-yellow-500 mb-2">{title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
