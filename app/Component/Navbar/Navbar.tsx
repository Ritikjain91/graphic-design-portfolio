import type { ReactNode } from "react";

export default function Navbar({ children }: { children?: ReactNode }) {
  return (
    <>
      <nav className="flex justify-center gap-4 bg-pink-800 text-white p-4">
        {/* <Link href="/blog">Blog</Link>
        <a href="/contact">Contact</a> */}

        <p className="text-xl font-bold">Graphic Design Portfolio</p>
      </nav>

      {children}
    </>
  );
}