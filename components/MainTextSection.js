import React from "react";
import Image from "next/image";
import home1 from "../public/home1.png";
import home2 from "../public/home2.jpg";

const MainTextSection = () => {
  return (
    <div className="h-screen w-full px-5 font-sans flex items-center justify-between flex-col gap-5">
      <div className="flex pt-28 items-center justify-center flex-col md:gap-0 gap-2 w-fit">
        <h1 className="leading-[.8] w-full text-left uppercase flex flex-row text-[26vw] font-extrabold">
          Illuso
        </h1>
        <h1 className="leading-[.8] w-full text-white/60 text-wrap uppercase flex flex-row justify-end text-[26vw] font-extrabold">
          Radio
        </h1>
        <p className="text-6xl text-[#ff5733] text-[6vw] mt-4 flex flex-1">
          ::: Live with us :::
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-6 text-white">
        <p className="text-2xl sm:text-base font-mono font-extrabold">
          Welcome to Illuso Radio – Your Ultimate Space for Tuning!
        </p>
        <p>
          Our radio station is designed to help you feel in tune with life,
          guiding your day from sunrise to sunset, blending soul-soothing sounds
          and mind-sharpening content.
        </p>
      </div>
      <div className="w-full grid grid-cols-5 pb-5 gap-5 items-end">
        <div className="col-span-3 h-[20vh] sm:h-[40vh]">
          <Image
            className="w-full h-full object-cover object-center"
            src={home1}
            alt=""
          />
        </div>
        <div className="col-span-5 sm:col-span-2 h-[30vh]">
          <Image
            className="w-full h-full object-cover object-center"
            src={home2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MainTextSection;
