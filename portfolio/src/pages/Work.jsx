import image2 from "../img/brand2.jpg";
import image3 from "../img/brand3.jpg";
import "../styles/Work.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
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
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "C",
            location: "/Work3",
            animation: "fade-right",
            duration: 1500,
        },
        {
            image: image2,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "D",
            location: "/Work4",
            animation: "fade-down",
            duration: 2500,
        },
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "E",
            location: "/Work5",
            animation: "fade-right",
            duration: 3000,
        },
        {
            image: image2,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "F",
            location: "/Work6",
            animation: "zoom-in-right",
            duration: 1500,
        },
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "G",
            location: "/Work7",
            animation: "zoom-in-left",
            duration: 2500,
        },
    ];
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="work">
            <div className="work-hero">
                <Nav />
            </div>
            <div className="section-1-work">
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
            <Footer />
        </div>
    );
};

export default Work;
