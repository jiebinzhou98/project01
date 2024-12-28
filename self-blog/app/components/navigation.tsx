import Link from "next/link";

export const Navigation = () => {
    return (
        <nav className="flex justify-center items-center p-4">
            <Link href={"/"} className="mr-4 text-blue-50">Home</Link>

            <Link href={"/about"} className="mr-4 text-blue-50">About</Link>
        </nav>
      );
}