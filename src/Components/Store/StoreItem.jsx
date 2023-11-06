import React from "react";

export default function StoreItem({ image, name, price, desc }) {
  return (
    <div className="w-[300px] rounded-lg overflow-hidden cursor-pointer shadow-lg h-fit">
      <img src={image} className="w-full" />
      <div className="border px-4 py-2">
        <h3 className="font-bold tracking-widest">{name.toUpperCase()}</h3>
        <p className="font-semibold">
          {price} <span className="text-yellow-600">$</span>
        </p>
        <p className="font-lightthin rounded-b-lg">
          {desc}
        </p>
      </div>
    </div>
  );
}
