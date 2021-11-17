import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="nav-wrapper pink darken-4">
                <div className="container">
                    <a href="/#" className="brand-logo lobster">
                        <h4>The Harakido1 Blog</h4>
                    </a>
                    <a
                        href="/#"
                        className="sidenav-trigger"
                        data-target="mobile-links"
                    >
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/" className="lobster">
                                <h4>Home</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to="/create" className="lobster">
                                <h4>New Blog</h4>
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/#"
                                className="btn-floating pink accent-4 z-depth-0"
                            >
                                <i className="material-icons">notifications</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-links">
                <li>
                    <a href="/" className="lobster">
                        <h4>Home</h4>
                    </a>
                </li>
                <li>
                    <a href="/create" className="lobster">
                        <h4>New Blog</h4>
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Navbar;
