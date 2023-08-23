import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
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
        <nav>
            <div className="nav-holder-1">
                <Link
                    to="/"
                    className=" logos logo-1"
                    style={{
                        transform:
                            scrollPosition > 150
                                ? "translate(0px, -103px)"
                                : "translate(0px, 0px)",
                        transition: "transform 200ms ",
                    }}
                >
                    <div className="logo">
                        <span>OW</span>
                        <span>HONDA</span>
                        <span>.COM</span>
                    </div>
                </Link>
                <Link
                    to="/"
                    className=" logos logo-2"
                    style={{
                        transform:
                            scrollPosition > 150
                                ? "translate(0px, -103px)"
                                : "translate(0px, 0px)",
                        transition: "transform 200ms ",
                    }}
                >
                    <div className="logo">
                        <span>DA</span>
                        <span>NIEL</span>
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
                            Work
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

                    <a href="www.linkedin.com" className="link">
                        {" "}
                        <li>LinkedIn</li>
                        <BsArrowUpRight />
                    </a>
                </ul>
            </div>

            <div className="main-nav">
                <div
                    className="container"
                    style={{
                        transform:
                            scrollPosition > 150
                                ? "translate(0px, -103px)"
                                : "translate(0px, 0px)",
                        transition: "transform 200ms ",
                    }}
                >
                    <ul>
                        <Link to="/Work">
                            <li
                                className={
                                    activePage === "/Work" ? "active" : ""
                                }
                            >
                                Work
                            </li>
                        </Link>
                        <Link to="/about">
                            <li
                                className={
                                    activePage === "/about" ? "active" : ""
                                }
                            >
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
                    className="navholder-4"
                    style={{
                        background: scrollPosition > 150 ? "#fff" : "",
                        borderRadius: "40px ",
                        padding: "9px 14px ",
                    }}
                >
                    <a href="www.linkedin.com">LinkedIn</a>
                    <div
                        className={`nav-holder-3 ${isOpen ? "is-active" : ""}`}
                        onClick={toggleNavbar}
                    >
                        {isOpen ? <HiX /> : <CiMenuFries />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
