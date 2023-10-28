import React from "react";

export default function Contact() {
  return (
    <div
      className="border w-full py-16"
      style={{ backgroundImage: "url('/pipes.png')" }}
    >
      <div className="text-center">
        <div className="mb-6">
          <h2 className="font-bold md:text-4xl lg:text-6xl text-3xl drop-shadow-2xl">
            HAVE A PROJECT?
          </h2>
          <h2 className="font-bold md:text-4xl lg:text-6xl text-3xl drop-shadow-2xl">
            LET'S TALK ABOUT IT!
          </h2>
        </div>
        <div className="text-lg font-thin lg:text-xl mt-1 w-fit border-b-4 border-b-[#222] mx-auto">
          <a className="text-justify mt-2" href="#">
            Send an email
          </a>
        </div>
      </div>
    </div>
  );
}
