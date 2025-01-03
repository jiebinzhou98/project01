import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

//include filter

export default async function Blog() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
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
  );
}
