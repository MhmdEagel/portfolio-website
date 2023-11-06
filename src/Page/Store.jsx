import React, { useState, useEffect } from "react";


import StoreContainer from "../Components/Store/StoreContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Store() {
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
          <StoreContainer />
        </>
      ) : (
        <div className="w-fit mx-auto mt-32">
          <Loading />
        </div>
      )}
    </>
  );
}

