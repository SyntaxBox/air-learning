import React from "react";
import { Check, X } from "react-bootstrap-icons";

export function Feature({ feature }: { feature: [boolean, string] }) {
  return (
    <div className="flex items-center gap-2 justify-center">
      {feature[0] ? (
        <Check className="text-green-500 w-[20px] h-[20px]" />
      ) : (
        <X className="text-red-500 w-[20px] h-[20px]" />
      )}
      <p className="text-slate-700">{feature[1]}</p>
    </div>
  );
}
