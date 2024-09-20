import React from "react";

function Header() {
  return (
    <header className="flex absolute font-mono text-[#24222E] z-20 items-center justify-between mx-auto w-full h-fit lg:px-10 md:px-8 px-6 lg:py-10 py-5">
      <div className="cursor-pointer">
        <h2 className="text-xl font-bold">PLTU</h2>
      </div>
      <div className="flex gap-x-6 sm:gap-x-10 text-xs sm:text-sm lg:text-base">
        <div className="cursor-pointer">
          <p>About</p>
        </div>
        <div className="cursor-pointer">
          <p>Channels</p>
        </div>
        <div className="cursor-pointer">
          <p>Contact</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
