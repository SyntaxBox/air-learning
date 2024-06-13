import React from "react";
import { Container, H2, P } from "@/ui/";
import { Cards } from "./Cards";

export function ServiceFeatures() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-6 ">
        <H2>Our service features</H2>
        <P>
          Revolutionary services that exceed expectations, offering cutting-edge
          solutions to meet diverse needs and drive success.
        </P>
      </div>
      <Cards />
    </Container>
  );
}

ServiceFeatures;
