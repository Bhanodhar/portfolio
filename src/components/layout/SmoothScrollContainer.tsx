import { useCallback, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SmoothScrollContainerProps {
  children: React.ReactNode;
}

export function SmoothScrollContainer({
  children,
}: SmoothScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1], [0, 1]);

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash && containerRef.current) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [handleHashChange]);

  return (
    <motion.div ref={containerRef} style={{ y }} className="w-full">
      {children}
    </motion.div>
  );
}
