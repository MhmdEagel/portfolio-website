import React from "react";

import Tribute from "./Tribute";

export default function Hero() {
  return (
    <div className="bg-bgPrimary flex flex-col overflow-hidden relative mb-32">
      <div class="flex h-[400px] w-screen items-center justify-center before:absolute before:h-[310px] before:w-[310px] before:bg-[#FFE3E3] before:rounded-full">
        <img class="z-10" src="/hero.png" />
      </div>
      <div className="mt-4 max-w-sm mx-auto">
        <div className="text-2xl font-bold w-fit">
          <p>FULL STACK DEVELOPER</p>
          <p>PROFESSIONAL WEB DEVELOPER.</p>
        </div>
        <div className="text-lg font-thin">
          <p className="text-justify mt-2">
            Hi, It's me Elaine! Known as a Professional Expert Pretty Full Stack
            Web Developer
          </p>
        </div>
        <div className="text-lg font-thin mt-1 w-fit border-b-4 border-b-white">
          <a className="text-justify mt-2" href="#">Download CV</a>
        </div>
      </div>
      <Tribute />
    </div>
  );
}
