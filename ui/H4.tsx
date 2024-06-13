import React, { ReactNode } from "react";

export function H4({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-center text-slate-700 uppercase text-xl font-bold">
      {children}
    </h4>
  );
}
