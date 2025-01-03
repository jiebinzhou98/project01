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
  const [newPost, setNewPost] = useState({title: "", body: ""})

  useEffect(() => {
    // Fetch posts when the component loads
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await res.json();
      setPosts(data);
      setFilteredPosts(data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    // Filter posts whenever the search term changes
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);


  const handleAddPost = () =>{
    if(newPost.title.trim() && newPost.body.trim()){
      const newPostData: Post ={
        id: posts.length +1,
        title: newPost.title,
        body: newPost.body,
      }

      const updataPosts = [newPostData, ...posts];
      setPosts(updataPosts);
      setFilteredPosts(updataPosts);
      setNewPost({title: "", body: ""});
    }else{
      alert("please fill out the title and body for the blog!!!");
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

            {/* Add Blog Section */}
            <div className="mb-10 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">Add a New Blog</h2>
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
          rows={4}
        />
        <button
          onClick={handleAddPost}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Blog
        </button>
      </div>


      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
