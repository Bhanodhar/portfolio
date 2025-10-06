import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  words: string[];
  delay?: number;
  className?: string;
}

export function Typewriter({
  words,
  delay = 2000,
  className = "",
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const typingDelay = isDeleting ? 50 : 100;
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    }, typingDelay);

    return () => clearTimeout(timer);
  }, [currentWordIndex, delay, isDeleting, text, words]);

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="ml-1"
          >
            |
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
