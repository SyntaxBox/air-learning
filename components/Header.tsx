import { Hero, TrustedBy } from "@/components";

export function Header() {
  return (
    <header className="flex flex-col justify-center items-center gap-10 bg-gradient-to-b from-white to-slate-50 md:h-screen ">
      <Hero />
      <TrustedBy />
    </header>
  );
}

Header;
