"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const Experience = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: 0, opacity: 1, transition: { duration: 0.65 } });
  }, [controls]);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const Chevron = () => (
    <div className="w-2 h-2 border-r-2 border-t-2 border-current transform rotate-45" />
  );

  const data = [
    {
      company: "JPMorganChase",
      role: "Software Engineer I (SRE-SWE)",
      date: "August 2024 - Present",
      description:
        "<strong><u>Technologies</u>:</strong> Python, Linux, SQL, Shell Scripting, React.js, Java, Springboot, Jenkins, Splunk, DynaTrace",
      description2:
        "<strong><u>Team/Line of Business</u>:</strong> Corporate Technology (CT)",
    },
    {
      company: "JPMorganChase",
      role: "Software Engineer Intern",
      date: "June 2023 - May 2024",
      description:
        "<strong><u>Technologies</u>:</strong> Angular, TypeScript, Java, Springboot, Shell Scripting, SQL, Hadoop, Git",
      description2:
        "<strong><u>Team/Line of Business</u>:</strong> Finance, Risk, Data, and Controls (FRDC)",
    },
    {
      company: "IBM",
      role: "Back End Engineer Co-Op Intern",
      date: "January 2023 - May 2023",
      description:
        "<strong><u>Technologies</u>:</strong> Linux, Python, Shell Scripting, Git",
      description2:
        "<strong><u>Team/Line of Business</u>:</strong> Hardware Abstraction Layer, Elastic Storage Systems",
    },
    {
      company: "NASA (LZT/KBR)",
      role: "Software Development Intern",
      date: "August 2022 - December 2022",
      description:
        "<strong><u>Technologies</u>:</strong> FreeFlyer AI, FreeFlyer Scripting, Java, Agility, Apache Subversion",
      description2:
        "<strong><u>Team/Line of Business</u>:</strong> Orbit Trajectory Systems, Mission Control Center",
    },
    {
      company: "PROS",
      role: "Software Product Development Intern",
      date: "May 2022 - December 2022",
      description:
        "<strong><u>Technologies</u>:</strong> React.js, TypeScript, Gastby.js, Next.js, Tailwind, Hugo, GoLang, Microsoft Azure, Git",
      description2:
        "<strong><u>Team/Line of Business</u>:</strong> API Extensibility",
    },
  ];

  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={controls}>
      <main>
        <div className="text-[0.93rem]  mt-2 font-sans">
          <div>
            <div className="mt-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`mx-1 leading-6 flex flex-col hover:bg-[#D3D3D3] hover:text-black border-l-2 border-white transition-all duration-300 ${
                    expandedIndex === index ? "bg-[#D3D3D3] text-black" : ""
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  <motion.div
                    className="outer-content ml-5 flex hover:cursor-pointer justify-between items-center sm:px-5 py-4 px-3"
                  >
                    <div>
                      <p className="text-base font-[500]">
                        <span className="mt-1 p-1">{item.company}</span>
                      </p>
                      <p className="text-xs italic px-1">{item.role}</p>
                      <p className="text-sm px-1 block sm:hidden">
                        {item.date}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm px-1 hidden sm:block">
                        {item.date}
                      </p>
                      <div
                        className={`ml-2 transform transition-transform duration-300 ${
                          expandedIndex === index ? "rotate-90" : ""
                        }`}
                      >
                        <Chevron />
                      </div>
                    </div>
                  </motion.div>
                  <div
                    className={`inner-content overflow-hidden bg-neutral-700 text-white transition-max-height duration-300 ease-in-out ${
                      expandedIndex === index ? "max-h-52" : "max-h-0"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="sm:ml-6 ml-4 p-1 px-5 py-4">
                      <p
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.description2 }}
                      ></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Experience;
