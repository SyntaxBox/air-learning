import { cn } from "@/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

export function Avatar({
  src,
  alt,
  children,
  className,
  width = 130,
  height = 40,
  ...rest
}: {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
} & JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...rest}
      className={cn(
        "flex flex-col items-center justify-center gap-3",
        className
      )}
    >
      <Image src={src} width={width} height={height} alt={alt} />
      <p className="text-slate-600 text-sm text-center font-bold">{children}</p>
    </div>
  );
}
