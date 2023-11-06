import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import AboutHero from "../Components/About/AboutHero";
import AboutList from "../Components/About/AboutList";

export default function About() {
  const [isLoading, setIsloading] = useState(false);

  const Loading = () => {
    return (
      <div className="sm:text-6xl text-4xl text-center">
        <span className="">
          <FontAwesomeIcon icon={faGear} spin />
          <p className="animate-pulse">Loading...</p>
        </span>
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => setIsloading(true), 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <AboutHero />
          <AboutList />
        </>
      ) : (
        <div className="w-fit mx-auto mt-32">
          <Loading />
        </div>
      )}
    </>
  );
}
