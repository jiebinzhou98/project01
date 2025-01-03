"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddNewBlog() {
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const router = useRouter();

  const handleSubmit = () => {
    if (newPost.title.trim() && newPost.body.trim()) {
      const existingPosts = JSON.parse(localStorage.getItem("posts") || "[]");
      const updatedPosts = [
        ...existingPosts,
        {
          id: existingPosts.length + 1,
          title: newPost.title,
          body: newPost.body,
        },
      ];
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
      router.push("/blog"); // Navigate back to the blog page
    } else {
      alert("Please fill in both the title and body!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Add a New Blog</h1>
      <input
        type="text"
        placeholder="Blog Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Blog Content"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={6}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
      <a
        href="/blog"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ml-4"
        >
        Return
        </a>
    </div>
  );
}
