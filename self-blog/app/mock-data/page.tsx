
type MockData = {
    id: number;
    name: string;
    avatar: string;
}


export default async function MockData() {
    const res = await fetch("https://676f0addb353db80c321ec7c.mockapi.io/project1");
    const datas = await res.json();
    return(
        <div className="grid grid-cols-4 gap-4 py-10">
            {datas.map((data: MockData) =>(
                <div
                    key = {data.id}
                    className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                    {data.name}
                </div>
            ))}
        </div>
    )
}