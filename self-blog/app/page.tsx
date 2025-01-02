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

      {/* Featured Blog Section */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">Featured Blog</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-xl font-bold mb-2">Featured Blog Post Title</h3>
          <p className="mb-4">A brief excerpt of the featured blog post...</p>
          <Link
            href="/blog/1" // Replace with dynamic post link
            className="text-blue-600 hover:text-blue-800"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">About the Blog</h2>
        <p className="mb-4">
          Welcome to my blog! I share articles on various topics, including technology, lifestyle, and more. Stay tuned for interesting content.
        </p>
        <Link
          href="/about"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Learn More
        </Link>
      </section>

      {/* CTA Section */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
        <p className="mb-4">Subscribe to our newsletter and get the latest blog posts directly to your inbox!</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-md border"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
          Subscribe
        </button>
      </section>

    </div>
  );
}
