import React from "react";
import Image from "next/image";
import svgArray from "@/assets/logos";

export function Logos() {
  return (
    <div className="logos grid grid-cols-2 grid-rows-4 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-2 gap-3 sm:gap-4 md:gap-6 max-w-[1200px]">
      {svgArray.map(({ name, svg }) => (
        <Image
          width={160}
          height={100}
          key={name}
          src={svg}
          alt={name}
          className="grayscale hover:grayscale-0 transition-all h-24 object-contain w-52 mx-auto contrast-0 hover:contrast-100"
        />
      ))}
    </div>
  );
}
