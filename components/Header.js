"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function Header() {
  const [currentTrack, setCurrentTrack] = useState("Loading...");

  useEffect(() => {
    // Simulate fetching the current track
    setTimeout(() => {
      setCurrentTrack("Smooth Jazz - Lazy Afternoon");
    }, 1000);

    // Animation for "Now Playing" section
    gsap.from(".now-playing", {
      duration: 1,
      opacity: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <header className="flex absolute font-mono text-accent/80 z-20 items-center justify-between mx-auto w-full h-fit lg:px-10 md:px-8 px-6 lg:py-10 py-5">
      {/* logo */}
      <div className="cursor-pointer">
        <h2 className="text-xl font-bold">EnUnCanal</h2>
      </div>

      {/* links */}
      <div className="flex gap-x-6 sm:gap-x-10 text-xs sm:text-sm lg:text-base uppercase">
        <div className="cursor-pointer hover:text-accent-hover">
          <p>Live</p>
        </div>
        <div className="cursor-pointer hover:text-accent-hover">
          <p>Schedule</p>
        </div>
        <div className="cursor-pointer hover:text-accent-hover">
          <p>Dj's</p>
        </div>
        <div className="cursor-pointer hover:text-accent-hover">
          <p>Media</p>
        </div>
        <div className="cursor-pointer hover:text-accent-hover">
          <p>Events</p>
        </div>
        <div className="cursor-pointer hover:text-accent-hover">
          <p>Contact</p>
        </div>
      </div>

      {/* Now Playing Section */}
      <div className="now-playing text-white">
        <span>Now Playing: {currentTrack}</span>
        <a href="/live" className="ml-4 neon-text underline">
          Live
        </a>
      </div>
    </header>
  );
}
