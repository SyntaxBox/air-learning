import { Input, Label } from "@/ui";
import { Container } from "@/ui/Container";
import Link from "next/link";
import React from "react";
import websiteDevelopment from "@/assets/website-development.svg";
import Image from "next/image";

export function ContactUs() {
  return (
    <Container>
      <div className="max-w-screen-xl grid gap-8 grid-cols-1 md:grid-cols-2 px-10 mx-auto">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
            <div className="text-slate-700 mt-8">
              Hate forms? Send us an{" "}
              <Link className="underline text-green-500" href="contact">
                email
              </Link>{" "}
              instead.
            </div>
          </div>
          <div className="mt-8 text-center">
            <Image
              width={400}
              src={websiteDevelopment}
              className="h-full w-full object-contain"
              alt="contact-us"
            />
          </div>
        </div>
        <div className="">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" />
          </div>
          <div className="mt-8">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" />
          </div>
          <div className="mt-8">
            <Label htmlFor="text">Message</Label>
            <textarea
              id="text"
              className="w-full h-[140px] bg-slate-50 border border-slate-200 text-slate-900 mt-2 p-3 rounded focus:outline-none focus:shadow-outline resize-none"
            ></textarea>
          </div>
          <div className="mt-8">
            <Link
              href="contact us"
              type="button"
              className="uppercase text-center text-sm font-bold tracking-wide bg-green-500 p-3 text-white rounded-lg w-full focus:outline-none focus:shadow-outline"
            >
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
