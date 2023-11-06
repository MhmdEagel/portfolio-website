import React from "react";


import AboutListAcademic from "./AboutListAcademic";
import AboutListJob from "./AboutListJob";
export default function AboutList() {
  return (
    <div className="my-16 flex lg:flex-row flex-col gap-4 items-center justify-center mx-auto">
      <AboutListAcademic />
      <AboutListJob />
    </div>
  );
}
