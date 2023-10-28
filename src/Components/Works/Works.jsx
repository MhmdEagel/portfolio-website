import React from "react";

export default function Works() {
  return (
    <div className="container mx-auto mt-24 mb-32 p-4">
      <h2 className="tracking-wider w-fit mx-auto">WORKS SECTION</h2>
      <h2 className="mx-auto w-fit text-3xl font-bold mb-8">MY AMAZING WORKS</h2>
      <section className="mb-16">
        <div
          className="max-w-4xl h-[450px] bg-cover relative  shadow-lg border"
          style={{ backgroundImage: "url('/works/1.jpg')" }}
        >
          <div className="bg-white absolute md:-right-16 bottom-0 max-w-sm md:h-[350px] shadow-lg p-4 flex flex-col justify-center">
            <h3 className="tracking-wider mb-1 font-semibold">
              WEB APP DEVELOPMENT
            </h3>
            <p className="mb-4 font-bold md:text-4xl text-xl">Lorem, ipsum dolor.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              dolorum reprehenderit soluta quaerat doloremque sit?
            </p>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div
          className="max-w-4xl h-[450px] bg-cover relative bg-center shadow-lg border ml-auto"
          style={{ backgroundImage: "url('/works/2.jpg')" }}
        >
          <div className="bg-white absolute md:-left-16 bottom-0 max-w-sm md:h-[350px] shadow-lg  p-4 flex flex-col justify-center">
            <h3 className="tracking-wider mb-1 font-semibold">
              MOBILE APP DEVELOPMENT
            </h3>
            <p className="mb-4 font-bold md:text-4xl text-xl">Lorem, ipsum dolor.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              dolorum reprehenderit soluta quaerat doloremque sit?
            </p>
          </div>
        </div>
      </section>
      <section>
        <div
          className="max-w-4xl h-[450px] bg-cover relative bg-center  shadow-lg border"
          style={{ backgroundImage: "url('/works/3.jpg')" }}
        >
          <div className="bg-white absolute md:-right-16 bottom-0 max-w-sm md:h-[350px] shadow-lg p-4 flex flex-col justify-center">
            <h3 className="tracking-wider mb-1 font-semibold">
              TEAM LEAD MANAGER
            </h3>
            <p className="mb-4 font-bold md:text-4xl text-xl">Lorem, ipsum dolor.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              dolorum reprehenderit soluta quaerat doloremque sit?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
