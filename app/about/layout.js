import Link from "next/link";

export const metadata = {
    title: "About page",
    description: "This is the about page",
}
export default function AboutLayout({ children }) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href="/about/dummy">dummy</Link>
                    </li>
                    <li>
                        <Link href="/about/dummy2">dummy2</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </>
    );
}