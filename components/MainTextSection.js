import React from "react";

const MainTextSection = () => {
  return (
    <div className="h-screen w-full px-5 font-sans flex items-center justify-between flex-col">
      <div className="flex pt-28 items-center justify-center flex-col md:gap-0 gap-2 w-fit">
        <h1 className="leading-[.8] w-full text-left uppercase flex flex-row text-[16vw] md:text-[26vw] font-extrabold">
          Illuso
        </h1>
        <h1 className="leading-[.8] w-full text-white/60 text-wrap uppercase flex flex-row justify-end text-[16vw] md:text-[26vw] font-extrabold">
          Radio
        </h1>
        <p className="text-6xl text-[#ff5733] mt-6">::: Live with us :::</p>
      </div>
    </div>
  );
};

export default MainTextSection;
