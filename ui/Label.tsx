import { cn } from "@/utils";
import React from "react";

export function Label(props: JSX.IntrinsicElements["label"]) {
  return (
    <label
      {...props}
      className={cn(
        "uppercase text-sm text-slate-600 font-bold",
        props.className
      )}
    />
  );
}
