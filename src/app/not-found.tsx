'use client';

import { motion } from 'framer-motion';

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col gap-4 row-start-2 my-10 items-center justify-center text-[15px]"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 className="text-3xl mt-32 font-semibold" variants={item}>
        404 - Page Not Found
      </motion.h1>

      <motion.p className="mb-4 text-md text-center" variants={item}>
        The page you are looking for is probably stuck in a Git merge conflict or under construction.
      </motion.p>

      {/* <motion.div variants={item}>
        <Link
          href="/"
          className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors"
        >
          Go Home
        </Link>
      </motion.div> */}
    </motion.div>
  );
}
