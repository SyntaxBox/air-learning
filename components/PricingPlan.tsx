import Link from "next/link";
import React from "react";
import { Feature } from "./Feature";
import { cn } from "@/utils";

export function PricingPlan({
  title,
  badge,
  price,
  features,
  featured,
  href,
}: {
  title: string;
  badge: string;
  price: number;
  features: [boolean, string][];
  featured?: boolean;
  href: string;
}) {
  return (
    <div
      className={cn(
        "w-full p-6 border  rounded-lg flex flex-col gap-3 items-center justify-center",
        featured ? "border-green-300" : "border-slate-200",
        "cursor-pointer hover:border-green-300"
      )}
    >
      <span className="bg-green-200 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
        {badge}
      </span>
      <h3 className="text-lg font-bold text-slate-700">{title}</h3>
      <p className="text-slate-500">{price}$</p>
      <span className="w-full h-[0.5px] bg-slate-200"></span>
      <div className="flex h-full flex-col justify-between w-full">
        <div className="flex items-start flex-col gap-2">
          {features.map((feature, i) => {
            return <Feature feature={feature} key={i} />;
          })}
        </div>
        <Link
          href={href}
          type="button"
          className="text-white w-full mt-6 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-md  px-5 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-800"
        >
          Try it now
        </Link>
      </div>
    </div>
  );
}
