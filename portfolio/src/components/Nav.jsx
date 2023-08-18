import { useState, useEffect } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const { pathname: activePage } = useLocation();

    return (
        <nav
            style={{
                opacity: scrollPosition > 250 ? "1" : "0",
                transition: "opacity 1s ",
            }}
        >
            <div className="nav-holder-1">
                <Link to="/">
                    <div className="logo">
                        <span>OW</span>
                        <span>HONDA</span>
                        <span>.COM</span>
                    </div>
                </Link>
            </div>
            <div className={`nav-holder-2 ${isOpen ? "is-active" : ""}`}>
                <div className="navbar-close" onClick={toggleNavbar}>
                    <HiX />
                </div>
                <ul>
                    <Link to="/Work">
                        <li className={activePage === "/Work" ? "active" : ""}>
                            Works
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className={activePage === "/about" ? "active" : ""}>
                            About Us
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li
                            className={
                                activePage === "/contact" ? "active" : ""
                            }
                        >
                            Contact
                        </li>
                    </Link>
                </ul>
            </div>
            <div
                className={`nav-holder-3 ${isOpen ? "is-active" : ""}`}
                onClick={toggleNavbar}
            >
                {isOpen ? <HiX /> : <HiMenuAlt1 />}
            </div>
        </nav>
    );
};

export default Nav;
