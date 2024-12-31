"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center items-center p-4 shadow-sm bg-slate-900 text-white">
      <Link
        href={"/"}
        className={pathname === "/" ? "font-bold mr-4 underline" : "text-blue-50 mr-4"}
      >
        Home
      </Link>
      <Link
        href={"/about"}
        className={pathname === "/about" ? "font-bold mr-4 underline" : "text-blue-50 mr-4"}
      >
        About
      </Link>
      <Link
        href={"/contact"}
        className={pathname === "/contact" ? "font-bold mr-4 underline" : "text-blue-50 mr-4"}
      >
        Contact
      </Link>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};
