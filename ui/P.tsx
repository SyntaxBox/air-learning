import React, { ReactNode } from "react";

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-slate-400 md:text-lg text-center font-light max-w-[1000px]">
      {children}
    </p>
  );
}
