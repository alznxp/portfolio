"use client";

// import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Connect = () => {
    const controls = useAnimation();
    
    useEffect(() => {
      controls.start({ y: 0, opacity: 1, transition: { duration: 0.65 } });
    }, [controls]);

    return (
       <motion.div initial={{ y: 100, opacity: 0 }} animate={controls}>
             <main>
               <div className="mt-1 font-sans flex gap-2">
                  <FaLinkedin className="text-gray text-3xl" />
                  <FaGithub className="text-gray text-3xl" />
                  <FaXTwitter className="text-gray text-3xl" />
                  <FaStackOverflow className="text-gray text-3xl" />
               </div>
             </main>
           </motion.div>
    );
};

export default Connect;