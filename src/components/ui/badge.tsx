import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  animate?: boolean;
}

export function Badge({
  className,
  children,
  variant = "default",
  animate = true,
}: BadgeProps) {
  const baseStyles = cn(
    "inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold transition-colors",
    {
      "bg-primary text-white hover:bg-yellow-600": variant === "default",
      "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700":
        variant === "secondary",
      "border border-primary text-primary hover:bg-yellow-50 dark:border-yellow-400 dark:text-yellow-400":
        variant === "outline",
    },
    className
  );

  if (animate) {
    return (
      <motion.span
        className={baseStyles}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    );
  }

  return <span className={baseStyles}>{children}</span>;
}
