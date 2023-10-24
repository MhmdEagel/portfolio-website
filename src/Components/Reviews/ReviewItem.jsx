import React from 'react'

export default function ReviewItem({mobileImg, webImg, name, job}) {
  return (
    <div
      className="w-full h-[450px] lg:h-[350px] bg-cover rounded-lg relative"
      style={{ backgroundImage: `url(${webImg})` }}
    >
      <div className="bg-white/60 rounded-lg absolute bottom-0 left-0 right-0 p-4 text-textPrimary">
        <h3 className="font-bold">{name.toUpperCase()}</h3>
        <p className="font-semibold">{job}</p>
      </div>
    </div>
  );
}
