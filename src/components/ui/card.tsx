import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface CardProps {
  className?: string;
  children: ReactNode;
  animate?: boolean;
}

export function Card({ className, children, animate = true }: CardProps) {
  const content = (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
        "hover:shadow-lg transition-shadow duration-200",
        className
      )}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}

Card.Header = function CardHeader({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
      {children}
    </div>
  );
};

Card.Content = function CardContent({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
};

Card.Footer = function CardFooter({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)}>
      {children}
    </div>
  );
};
