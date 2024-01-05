import Link from "next/link";

export default function Blogs() {

    const blogs = [
        {
            id: 1,
            title: "Blog 1",
            description: "This is blog 1"
        },
        {
            id: 2,
            title: "Blog 2",
            description: "This is blog 2"
        }
    ]
    return (
        <main>
            <div>Blogs</div>
            <ul>
                {blogs.map((blog)=>{
                    return(
                        <li key={blog}>
                            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    );
}