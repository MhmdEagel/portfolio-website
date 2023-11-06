import React from "react";
import Hero from "../Components/Hero/Hero";
import Reviews from "../Components/Reviews/Reviews";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Services />
      <Contact />
    </>
  );
}
