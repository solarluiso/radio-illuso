import React from "react";

function Header() {
  return (
    <header className="flex absolute font-mono text-accent/80 z-20 items-center justify-between mx-auto w-full h-fit lg:px-10 md:px-8 px-6 lg:py-10 py-5">
      <div className="cursor-pointer">
        <h2 className="text-xl font-bold">PLTU</h2>
      </div>
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
    </header>
  );
}

export default Header;
