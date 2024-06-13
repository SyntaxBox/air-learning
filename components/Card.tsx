import Link from "next/link";
import React from "react";
import { Icon as IconComponent } from "react-bootstrap-icons";
export function Card({
  title,
  description,
  icon: Icon,
  href,
}: {
  title: string;
  description: string;
  icon: IconComponent;
  href: string;
}) {
  return (
    <div className="w-full flex flex-col gap-3 p-6 border border-slate-200 shadow-sm rounded-lg cursor-pointer bg-slate-50 hover:shadow-lg transition-all">
      <div className="flex items-center justify-between">
        <Icon className="text-green-400 bg-white p-2 rounded-full w-[40px] h-[40px]" />
        <Link
          href={href}
          className="p-2 border border-slate-200 rounded-md hover:shadow"
        >
          Show more
        </Link>
      </div>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm font-light text-slate-500">{description}</p>
      </div>
    </div>
  );
}
