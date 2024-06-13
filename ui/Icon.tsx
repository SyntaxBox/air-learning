import React from "react";
import { Icon as IconComponent } from "react-bootstrap-icons";

export function Icon({ icon: IconChildrenComponent }: { icon: IconComponent }) {
  return (
    <div
      className="w-[40px] h-[40px] bg-red-600"
      style={{ width: "40px", height: "40px" }}
    >
      <IconChildrenComponent />
    </div>
  );
}
