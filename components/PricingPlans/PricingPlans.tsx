import React from "react";
import plans from "./plans";
import { PricingPlan } from "../PricingPlan";
import { H2, P, Container } from "@/ui";

export function PricingPlans() {
  return (
    <Container className="flex items-center justify-center gap-3 flex-col">
      <H2>Our pricing plans</H2>
      <P>
        Revolutionary services that exceed expectations, offering cutting-edge
        solutions to meet diverse needs and drive success. services that exceed
        expectations.
      </P>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-6 max-w-[1200px] mt-6">
        {plans.map((plan, i) => {
          return <PricingPlan key={i} {...plan} />;
        })}
      </div>
    </Container>
  );
}

PricingPlans;
