"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 70 }}
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      transition={{ delay: 0.175 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedTitle = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : 70,
      }}
      initial={{ opacity: 0, x: 70 }}
      transition={{ delay: 0.175 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedImage = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0,
        scale: inView ? 1 : 0.3,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: 0.175 }}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedSection, AnimatedTitle, AnimatedImage };
