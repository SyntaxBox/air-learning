import React from "react";
import Link from "next/link";
import { Title } from "./Title";
import { Container, P } from "@/ui";

export function Hero() {
  return (
    <Container className="flex flex-col items-center justify-center gap-7">
      <Title text="Best Solutions For Your Business" />
      <P>
        We offer the best solutions for your business startup, tailored to your
        specific needs. our team of experts will help you launch your business
        successfully
      </P>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="get started"
          type="button"
          className="text-white min-w-[150px] bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-md  px-5 py-3 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-800"
        >
          Get Started
        </Link>
        <Link
          href="let's talk"
          type="button"
          className="text-slate-600 min-w-[150px] bg-white shadow focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded text-md hover:shadow-md px-5 py-3 text-center mr-3 md:mr-0"
        >
          Let&apos;s talk
        </Link>
      </div>
    </Container>
  );
}

Hero;
