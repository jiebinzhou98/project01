// pages/index.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-6 py-10">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Explore Blogs
        </Link>
      </section>
    </div>
  );
}
