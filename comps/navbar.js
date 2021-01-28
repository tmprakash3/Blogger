import Link from 'next/link';
const Navbar = () => {
    return (
        <div className="toolbar">
            <div className="logo">
                <h1>Blogger</h1>
            </div>
            <div className="nav-links">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/todos"><a>Todos list</a></Link>
            </div>
        </div>
    );
}

export default Navbar;