"use client";

import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Image from "next/image";

const Footer = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      // Get the current time in Chicago timezone
      const timeString = moment().tz("America/Chicago").format("HH:mm");
      setTime(timeString);
    };

    updateTime();

    // Update every second (1000 ms)
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-transparent select-none p-4 flex flex-col md:flex-row justify-between items-center text-sm text-[#a3a3a3]">
  <div className="text-xs flex items-center justify-center mb-1 sm:mb-0">
    <span>MMXXV &copy; Alizain &bull; Made in Texas </span>
    <Image 
      src="texas.svg" 
      width="20"
      height="20"
      alt="Texas" 
      className="ml-1 h-4 w-auto" 
    />
  </div>
  <div className="text-xs flex items-center justify-center">
    <span>{time}</span>
  </div>
</footer>

  );
};

export default Footer;
