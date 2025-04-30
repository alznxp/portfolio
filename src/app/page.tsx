"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Experience from "@/components/experience";

const containerVariants = {
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

export default function Home() {
  return (
    <motion.main
      className="flex flex-col gap-2 row-start-2 my-10 items-center items-start text-[15px]"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <Image
          className="rounded-2xl select-none"
          src="/alizain.png"
          alt="Alizain Banner"
          width={1500}
          height={50}
          draggable={false}
        />
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="mt-5 font-semibold text-2xl"
      >
        About
      </motion.h1>

      <motion.p variants={itemVariants} className="mt-2">
        Hey there! I&apos;m Alizain, a Site Reliability-Software Engineer at{" "}
        <Link
          href="https://jpmorganchase.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="JPMorgan-highlight">JPMorganChase</span>
        </Link>
        , based in Houston, TX. I hold dual bachelor&apos;s degrees in Computer
        Science and Mathematics from the{" "}
        <Link href="https://uh.edu" target="_blank" rel="noopener noreferrer">
          <span className="UH-highlight">University of Houston</span>
        </Link>
        , Class of 2024, and I&apos;m currently pursuing a Master&apos;s in Computer
        Science with a focus on Artificial Intelligence at the{" "}
        <Link
          href="https://utexas.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="UT-highlight">University of Texas at Austin</span>
        </Link>
        .
      </motion.p>

      <motion.p variants={itemVariants} className="mt-1">
        I&apos;ve been fortunate to work on software engineering and product
        development initiatives at{" "}
        <Link
          href="https://jpmorganchase.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="JPMorgan-highlight">JPMorganChase</span>
        </Link>
        ,{" "}
        <Link href="https://ibm.com" target="_blank" rel="noopener noreferrer">
          <span className="IBM-highlight">IBM</span>
        </Link>
        ,{" "}
        <Link href="https://nasa.gov" target="_blank" rel="noopener noreferrer">
          <span className="NASA-highlight">NASA</span>
        </Link>
        , and{" "}
        <Link href="https://pros.com" target="_blank" rel="noopener noreferrer">
          <span className="PROS-highlight">PROS</span>
        </Link>
        , where I focused on full-stack development, developing new products,
        building scalable systems, and driving automation across diverse
        technical landscapes.
      </motion.p>

      <motion.p variants={itemVariants} className="mt-1">
        I&apos;m passionate about software engineering, machine learning, and
        artificial intelligence, with strong interests in entrepreneurship and
        finance. Outside of work, you&apos;ll find me exploring new tech, gaming,
        watching soccer, or catching up on Netflix.
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="mt-5 font-semibold text-2xl"
      >
        Experience
      </motion.h1>
      <motion.div
        variants={itemVariants}
        className="mt-1 max-w-5xl w-full mx-auto"
      >
        <Experience />
      </motion.div>
    </motion.main>
  );
}
