import React from "react";
import { cn } from "@/utils";

interface CompProps {
  as?: keyof JSX.IntrinsicElements;
}

export function Container({
  children,
  as: Tag = "section",
  ...rest
}: CompProps & React.HTMLAttributes<HTMLOrSVGElement>) {
  return (
    //@ts-ignore
    <Tag
      {...rest}
      className={cn(
        "h-full w-full p-4 container mx-auto max-w-7xl",
        rest.className
      )}
    >
      {children}
    </Tag>
  );
}
