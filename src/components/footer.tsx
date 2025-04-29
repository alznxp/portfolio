"use client";

import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const Footer = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      // Get the current time in Chicago timezone
      const timeString = moment().tz("America/Chicago").format("HH:mm");
      setTime(timeString);
    };

    // Initial update
    updateTime();

    // Update every second (1000 ms)
    const interval = setInterval(updateTime, 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-transparent select-none p-4 flex justify-between items-center text-sm text-neutral-200">
      <div className="text-xs flex items-center mb-2 md:mb-0">
        <span>MMXXV &copy; Alizain &bull; Made in Texas </span>
        <img src="texas.svg" alt="Texas" className="ml-1 h-4 w-auto" />
      </div>
      <div className="text-xs">
        <span>{time}</span>
      </div>
    </footer>
  );
};

export default Footer;
