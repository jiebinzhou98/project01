"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center bg-slate-900 text-white p-4">
      {/* Logo Section */}
      <Link href="/">
        <img
          src="/favicon.ico" // Replace with your logo path
          alt="Logo"
          className="h-10 w-auto object-contain" // Adjust size as needed
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <Link
          href="/"
          className={pathname === "/" ? "font-bold text-white" : "text-blue-50"}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "font-bold text-white" : "text-blue-50"}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={pathname === "/contact" ? "font-bold text-white" : "text-blue-50"}
        >
          Contact
        </Link>

        {/* Sign-In/Out Buttons */}
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
