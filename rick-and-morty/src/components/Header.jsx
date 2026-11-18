import { Link } from "react-router";
import { Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <header>
            <h1>Rick and Morty</h1>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
}