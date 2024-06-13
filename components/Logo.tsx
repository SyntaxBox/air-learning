import Image from "next/image";
import React from "react";

export function Logo({ withText }: { withText?: boolean }) {
  return (
    <div className="flex items-center justify-start gap-3">
      <div>
        <Image
          src="/logo.svg"
          alt="logo"
          width={40}
          height={40}
          className="animate-spin"
        />
      </div>
      {withText && <p className="text-xl text-slate-700">AirLearning</p>}
    </div>
  );
}

Logo;
