import { Container } from "@/ui/Container";
import React from "react";
import { Logo } from "./Logo";
import { P } from "@/ui/P";
import { H4 } from "@/ui/H4";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-100 to-white">
      <Container>
        <div className="w-full max-w-[1200px] flex flex-col gap-6 py-4">
          <div className="flex flex-col md:flex-row gap-3 md:items-center  justify-between">
            <p className="font-bold text-2xl">
              Welcome to your new digital reality, Wow.
            </p>
            <div className="flex md:gap-3 min-w-[250px] w-full md:w-fit">
              <Link
                href="sign up"
                type="button"
                className=" max-h-[48px] text-green-500 border border-slate-200 bg-white rounded  focus:outline-none font-medium px-5 py-2.5 text-center mr-3 md:mr-0 w-full"
              >
                Sign Up
              </Link>
              <Link
                href="log in"
                type="button"
                className=" max-h-[48px] text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded px-5 py-2.5 text-center mr-3 md:mr-0 w-full"
              >
                Log in
              </Link>
            </div>
          </div>
          <span className="w-full h-[0.5px] bg-slate-200 block"></span>
          <div className="ml-6 sm:ml-0 flex flex-col lg:flex-row md:items-center justify-between gap-10">
            <div className=" lg:w-[30%] h-full flex flex-col items-start justify-between gap-6">
              <Logo withText />
              <p className="text-slate-400  font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                itaque incidunt nulla voluptatem. Quas laboriosam tempore.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 w-full lg:w-[70%] justify-between gap-6 md:gap-0 items-start">
              <div className="flex flex-col items-start  gap-3">
                <H4>About Us</H4>
                <div className="text-slate-600 flex flex-col gap-2">
                  <p>Who we are</p>
                  <p>What we Do</p>
                  <p>Channels</p>
                  <p>Watch a demo</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <H4>Resources</H4>
                <div className="text-slate-600 flex flex-col gap-2">
                  <p>Features</p>
                  <p>Community</p>
                  <p>Channels</p>
                  <p>Solutions</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <H4>Features</H4>
                <div className="text-slate-600 flex flex-col gap-2">
                  <p>Features</p>
                  <p>Community</p>
                  <p>Channels</p>
                  <p>Solutions</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <H4>Community</H4>
                <div className="text-slate-600 flex flex-col gap-2">
                  <p>Features</p>
                  <p>Community</p>
                  <p>Channels</p>
                  <p>Solutions</p>
                </div>
              </div>
            </div>
          </div>
          <span className="w-full h-[0.5px] bg-slate-200 block"></span>
          <p className="text-center">
            &#169;{new Date().getFullYear()}{" "}
            <a href="#" className="text-green-500 underline">
              {" "}
              Abdelhamid Boudjit
            </a>{" "}
            Full stack developer
          </p>
        </div>
      </Container>
    </footer>
  );
}
