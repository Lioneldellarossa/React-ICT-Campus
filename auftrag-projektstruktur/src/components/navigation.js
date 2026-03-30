import About from "@/app/about/page";
import Home from "@/app/page";
import Link from "next/link";

export default function Navigation() {
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/">Home</Link>
                </li>
            </ul>
        </nav>
    )
}