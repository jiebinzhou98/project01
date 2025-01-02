import { notFound } from "next/navigation";

type Post = {
    id: number;
    title: string;
    body: string;
};

export default async function BlogPost({ params }: { params: { id: string } }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if (!res.ok) {
        return notFound();
    }

    const post: Post = await res.json();

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700">{post.body}</p>
            <a
                href="/blog"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Go Back
            </a>
        </div>
    );
}
