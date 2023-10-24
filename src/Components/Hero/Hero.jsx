import React from "react";

import HeroImg from "./HeroImg";
import HeroText from "./HeroText";
import Tribute from "./Tribute";

export default function Hero() {
  return (
    <div className="bg-bgPrimary flex lg:flex-row flex-col relative pb-44 mb-32 items-center">
      <HeroImg />
      <HeroText />
      <Tribute />
    </div>
  );
}
