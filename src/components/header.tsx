"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
    { href: "/contact", label: "Contact" },

  ];

  return (
    <header className="flex justify-between items-center pr-2 py-3">
      <div className="hover:max-w-full logo group text-2xl select-none">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/ALZN.png"
            alt="ALZN Logo"
            width={70} 
            height={30} 
            draggable={false}
            className = "hover:brightness-70 transition duration-300"
          />
        </Link>
      </div>

      <nav className="flex flex-col parent text-end">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`text-md select-none transition duration-300 ${
                isActive ? "text-white" : "text-[#a3a3a3]"
              } mb-[-4px] hover:text-white`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
