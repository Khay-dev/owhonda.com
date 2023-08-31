import image2 from "../img/brand2.jpg";
import image3 from "../img/brand3.jpg";
import "../styles/Work.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Work = () => {
    let works = [
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "A",
            location: "/Work1",
        },
        {
            image: image2,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "B",
            location: "/Work2",
        },
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "C",
            location: "/Work3",
        },
        {
            image: image2,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "D",
            location: "/Work4",
        },
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "E",
            location: "/Work5",
        },
        {
            image: image2,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "F",
            location: "/Work6",
        },
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "G",
            location: "/Work7",
        },
    ];

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
