// pages/blog.tsx
type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Blog() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const datas: Post[] = await res.json(); // Explicitly typing the response

  return (
    <div className="grid grid-cols-4 gap-4 py-10">
      {datas.map((data) => (
        <div key={data.id} className="p-4 border rounded shadow-sm">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p className="text-sm">{data.body}</p>
        </div>
      ))}
    </div>
  );
}
