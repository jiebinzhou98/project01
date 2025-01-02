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

      {/* Featured Posts */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Featured Post */}
          <div className="p-4 border rounded shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Post Title</h3>
            <p className="text-sm text-gray-600">
              This is a short description or excerpt of the post...
            </p>
            <Link href="/blog/1" className="text-blue-600 mt-2 inline-block">
              Read More
            </Link>
          </div>
          {/* Repeat similar blocks for other posts */}
        </div>
      </section>

      {/* About Section */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">About This Blog</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This blog is a place where you can find interesting and engaging content on various topics. Whether you're here to learn, explore, or simply enjoy reading, we've got you covered!
        </p>
      </section>
    </div>
  );
}
