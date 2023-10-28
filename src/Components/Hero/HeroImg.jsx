import React from "react";


export default function HeroImg() {
  return (
    <div class="flex h-[400px] w-fit items-center justify-center before:absolute before:h-[310px] before:w-[310px] before:bg-[#FFE3E3] before:rounded-full relative">
      <img class="z-10" src="/hero.png" />
    </div>
  );
}
