import React, { useState } from "react";

import { academicList } from "../../Utils/data";
import ListItemAcademic from "./ListItemAcademic";

export default function AboutListAcademic() {
  const [academicItems, setAcademicItems] = useState(academicList());
  return (
    <>
      <section>
        <h2 className="font-bold mb-4 text-xl text-center">
          Academic Qualification
        </h2>
        {academicItems.map((item) => {
          return <ListItemAcademic {...item} />;
        })}
      </section>
    </>
  );
}
