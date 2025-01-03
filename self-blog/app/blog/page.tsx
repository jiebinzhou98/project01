"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await res.json();
      setPosts(data);
      setFilteredPosts(data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);


  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Link
          href="/add-newblog"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ml-4"
        >
          Add New Blog
        </Link>
      </div>

      {/* Blog Posts in 3-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 border border-gray-200 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 line-clamp-3">{post.body}</p>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* No Results Found */}
      {filteredPosts.length === 0 && (
        <p className="text-gray-600 text-center mt-10">No posts found.</p>
      )}
    </div>
  );
}
