import React from "react";

export default function AboutHero() {
  return (
    <div className="bg-bgPrimary pb-36 pt-8">
      <section className="container flex lg:flex-row md:flex-row flex-col justify-center items-center lg:gap-16 gap-4 mx-auto">
        <div className="relative mt-4 w-fit">
          <img
            src="/about.png"
            className="block w-[310px] lg:w-[450px] rounded-tr-[100px] rounded-2xl z-30 relative"
            alt=""
          />
          <div className="bg-[#FFE3E3] lg:w-[320px] w-[260px] h-[100px] absolute -left-5 -bottom-5 z-0 rounded-2xl"></div>
          <div className="bg-[#FFE3E3] w-[100px] h-[100px] absolute -right-5 -top-5 z-0 rounded-full"></div>
        </div>
        <div className="max-w-xs max-lg:mx-auto">
          <h1 className="font-bold mb-4 text-xl lg:text-2xl tracking-wider">
            ABOUT <span className="text-[#444]">ME</span>
          </h1>
          <p className="text-justify text-base lg:text-lg mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem qui
            neque consequatur numquam placeat reiciendis explicabo sequi,
            deleniti a nesciunt officiis delectus corrupti laborum error odio,
            libero officia ea cupiditate!
          </p>
          <a href="#" className="border-b-4 border-white font-semibold lg:text-lg tracking-wider">
            READ MORE
          </a>
        </div>
      </section>
    </div>
  );
}
