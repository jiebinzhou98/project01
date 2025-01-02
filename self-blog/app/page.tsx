"use client"
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      alert("Please enter a valid email")
      return;
    }

    console.log("subscribe with email: ", email)
    setIsSuccess(true);
    setEmail("");
  };

  const closeSuccessMessage = () => {
    setIsSuccess(false);
  };


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

      {/* Featured Blog and About Section - Side by side */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Featured Blog Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-center font-bold mb-2">Featured Blog Post Title</h2>
          <p className="mb-4 text-center text-gray-700">A brief excerpt of the featured blog post...</p>
          <div className="flex justify-center">
            <Link
              href="/blog/1" // Replace with dynamic post link
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* About Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-center text-xl font-bold mb-2">About the Blog</h2>
          <p className="text-center mb-4 text-gray-700">
            Welcome to my blog! I share articles on various topics, including technology, lifestyle, and more. Stay tuned for interesting content.
          </p>
          <div className="flex justify-center">
            <Link
              href="/about"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section - Card */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
        <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
          <p className="mb-4 text-gray-700">Subscribe to our newsletter and get the latest blog posts directly to your inbox!</p>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md border focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Success Pop-up Message */}
      {isSuccess && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Subscription Successful!</h3>
            <p className="text-gray-700 mb-4">Thank you for subscribing to our newsletter!</p>
            <button
              onClick={closeSuccessMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
