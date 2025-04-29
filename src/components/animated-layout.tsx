// components/animated-layout.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

const layoutVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AnimatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="grid grid-rows-[auto_1fr_auto] justify-items-center min-h-screen p-5 text-[#d1d5db] font-[family-name:var(--font-geist-sans)]"
      variants={layoutVariants}
      initial="hidden"
      animate="show"
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} className="w-full max-w-4xl" variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
