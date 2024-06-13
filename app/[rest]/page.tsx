import Link from "next/link";
import React from "react";

function NotFound({ params }: { params: { rest: string } }) {
  return (
    <main className="flex items-center justify-center w-screen h-screen flex-col">
      <p className="font-bold text-3xl capitalize">{params.rest} Page</p>
      <p>Add You Custom Content</p>
      <Link href="/" className="text-green-500">
        Go home
      </Link>
    </main>
  );
}

export default NotFound;
