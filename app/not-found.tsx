import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <main className="flex items-center justify-center w-screen h-screen flex-col">
      <p className="font-bold text-3xl">Page Not Found :(</p>
      <p>This page is not available</p>
      <Link href="/" className="text-green-500">
        Go home
      </Link>
    </main>
  );
}

export default NotFound;
