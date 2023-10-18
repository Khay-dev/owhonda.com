import Nav from "../components/Nav";
import "../styles/Home.css";
import Footer from "../components/Footer";

import image2 from "../img/brand2.jpg";
import image3 from "../img/brand3.jpg";

import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    let works = [
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "A",
            location: "/Work1",
            animation: "zoom-in-right",
            duration: 1500,
        },
        {
            image: image2,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "B",
            location: "/Work2",
            animation: "zoom-in-left",
            duration: 2500,
        },
        {
            image: image2,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "F",
            location: "/Work3",
            animation: "zoom-in-right",
            duration: 1500,
        },
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "G",
            location: "/Work4",
            animation: "zoom-in-left",
            duration: 2000,
        },
    ];

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="home">
            <div className="home-hero">
                <Nav />
                <div className="home-main-hero">
                    <h1
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1300"
                    >
                        OWHONDA <br />
                        .COM
                    </h1>
                    <div className="home-hero-2">
                        <a className="arrow" href="#section-1">
                            <svg className="arrows">
                                <path
                                    className="a1"
                                    d="M0 0 L30 32 L60 0"
                                ></path>
                                <path
                                    className="a2"
                                    d="M0 20 L30 52 L60 20"
                                ></path>
                                <path
                                    className="a3"
                                    d="M0 40 L30 72 L60 40"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <section id="section-1" className="home-section-1">
                <p className="section-1-p">
                    Welcome to the creative world of me, Owhonda
                    <span>(Oh-Honda)</span>, where artistry meets functionality
                    to craft unforgettable user experiences. Whether you are
                    looking to enhance your websites user interface, create
                    compelling user experiences, or revamp your brand identity,
                    I am here to transform your vision into captivating, user
                    friendly designs that leave a lasting impression. Explore my
                    portfolio and lets embark on a journey of design innovation
                    together.
                </p>
                <div className="section-1-main">
                    {works.map((work) => (
                        <Link
                            to={work.location}
                            id="container"
                            className={work.className}
                            key={work.id}
                            data-aos={work.animation}
                            data-aos-duration={work.duration}
                        >
                            <img src={work.image} alt="pics" />
                            <div className="text">
                                <p className="main-text">{work.client}</p>
                                <p className="">{work.type}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <Link to="/Work">
                    <div className="btn">
                        <span>See All </span>
                        <BsArrowUpRight />
                    </div>
                </Link>
            </section>
            <section className="home-section-2">
                <div className="section-a">
                    <p>
                        FREELANCE <span>UI/UX</span> DESIGNER AND THEN SOME.....
                    </p>
                </div>
                <div className="section-b">
                    <p>
                        I have had the privilege of crafting meaningful
                        experiences for clients across the globe. As a seasoned{" "}
                        <span>ui/ux</span> designer with a passion for
                        aesthetics and functionality, I offer a holistic
                        approach to design, seamlessly blending user centric
                        digital experiences with comprehensive branding
                        solutions.
                    </p>
                    <Link to="/About">
                        <div className="btn">
                            <span>Read More</span>
                            <span className="span-2">
                                <BsArrowUpRight />
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
