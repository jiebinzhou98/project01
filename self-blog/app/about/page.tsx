"use client"
import { useRouter } from "next/navigation";


// pages/about.tsx
export default function About() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        
        {/* Introduction Section */}
        <section className="mb-8 text-center">
          <p className="text-lg text-gray-700">
            Welcome to <span className="font-semibold">My Blog</span>! We’re passionate about sharing engaging, insightful, and entertaining content on a wide variety of topics. Whether you're here to learn something new, gain inspiration, or just enjoy a good read, you’re in the right place.
          </p>
        </section>
  
        {/* Image Section */}
        <section className="mb-8 text-center">
          <img
            src="/images/about-us.jpg"
            alt="About Us"
            className="rounded-lg shadow-md mx-auto"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </section>
  
        {/* Mission/Vision Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Mission</h2>
          <p className="text-gray-700 text-center">
            Our mission is to create a platform where readers can explore, learn, and grow through well-crafted articles and stories. We believe in the power of knowledge and storytelling to make a positive impact in the world.
          </p>
        </section>
  
        {/* Call-to-Action Section */}
        <section className="text-center">
          <h3 className="text-xl font-semibold mb-4">Want to see what we’re up to?</h3>
          <a
            href="/blog"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mr-4"
          >
            Explore Our Blog
          </a>
          <a 
            href="/"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Go Back
        </a>
        </section>
      </div>
    );
  }
  