import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function ListItemAcademic({qualific, inst, year}) {
  return (
    <div className='py-4 min-w-[450px]'>
      <div className="flex gap-4 justify-center items-center">
        <div>
          <div className="w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center text-white text-lg">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
        </div>
        <div className="w-full">
          <h5 className='mb-1 font-semibold sm:text-base text-sm'>{qualific}</h5>
          <p className='sm:text-sm text-xs'>{inst} ({year})</p>
        </div>
      </div>
    </div>
  );
}
