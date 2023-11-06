import React, {useState} from "react";

import { jobList } from "../../Utils/data";
import ListItemJob from "./ListItemJob";


export default function AboutListJob() {
    const [jobItems, setjobItems] = useState(jobList())
  return (
    <>
      <section>
      <h2 className="font-bold max-sm:mt-16 mb-4 text-xl text-center">Job Experinces</h2>
        {
            jobItems.map(item => {
                return (
                    <ListItemJob {...item} />
                )
            })
        }
      </section>
    </>
  );
}
