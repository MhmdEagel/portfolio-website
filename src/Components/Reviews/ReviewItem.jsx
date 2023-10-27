import React from 'react'

export default function ReviewItem({webImg, name, job}) {
  return (
    <div
      className="w-full h-[450px] lg:h-[350px] bg-cover rounded-lg relative bg-center"
      style={{ backgroundImage: `url(${webImg})` }}
    >
      <div className="bg-white/60 rounded-lg absolute bottom-0 left-0 right-0 p-4 text-textPrimary">
        <h3 className="font-bold text-xs md:text-base">{name.toUpperCase()}</h3>
        <p className="font-semibold text-xs md:text-sm">{job}</p>
      </div>
    </div>
  );
}
