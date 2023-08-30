import image2 from "../img/brand2.jpg";
import image3 from "../img/brand3.jpg";
import "../styles/Work.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Work = () => {
    let works = [
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "A",
        },
        {
            image: image2,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "B",
        },
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "C",
        },
        {
            image: image2,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "D",
        },
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "E",
        },
        {
            image: image2,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "F",
        },
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "G",
        },
    ];

    return (
        <div className="work">
            <div className="work-hero">
                <Nav />
            </div>
            <div className="section-1-work">
                {works.map((work) => (
                    <div
                        id="container"
                        className={work.className}
                        key={work.id}
                    >
                        <img src={work.image} alt="pics" />
                        <div className="text">
                            <p className="main-text">{work.client}</p>
                            <p className="">{work.type}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Work;
