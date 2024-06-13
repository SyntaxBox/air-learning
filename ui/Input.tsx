import { cn } from "@/utils";
import React from "react";

export function Input(props: JSX.IntrinsicElements["input"]) {
  return (
    <input
      {...props}
      className={cn(
        "w-full bg-slate-50 border border-slate-200 text-slate-900 mt-2 p-3 rounded focus:outline-none focus:shadow-outline",
        props.className
      )}
    />
  );
}
