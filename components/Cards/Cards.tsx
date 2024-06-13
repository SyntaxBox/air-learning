import { Card } from "../Card";
import { cardData } from "./cardData";

export function Cards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px]">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
