import styles from "../styles/Navbar.modules.css"

export default function Navbar() {
    return (
        <nav>
            <li>Home</li>
            <Link href="/posts">
                 <li>Posts</li>
            </Link>
            <Link href="/posts">
                 <li>Users</li>
            </Link>         
 
        </nav>
    )
}