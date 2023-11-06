import React from 'react'

export default function HeroText() {
  return (
    <div className="mt-4 max-w-sm lg:max-w-xl mx-auto px-4">
      <div className="text-2xl lg:text-4xl font-bold w-fit mb-4">
        <p>FULL STACK DEVELOPER</p>
        <p>PROFESSIONAL WEB DEVELOPER.</p>
      </div>
      <div className="text-lg lg:text-xl font-thin mb-4">
        <p className="text-justify mt-2">
          Hi, It's me Elaine! Known as a Professional Expert Pretty Full Stack
          Web Developer
        </p>
      </div>
      <div className="text-lg font-thin lg:text-xl mt-1 w-fit border-b-4 border-b-white">
        <a className="text-justify mt-2" href="#">
          Download CV
        </a>
      </div>
    </div>
  );
}
