import Nav from "../components/Nav";
import "../styles/Home.css";
import image2 from "../img/brand2.jpg";
import image3 from "../img/brand3.jpg";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const Home = () => {
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
            image: image2,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "F",
            location: "/Work3",
        },
        {
            image: image3,
            type: "Branding",
            client: "Lorem Ipsum",
            id: crypto.randomUUID(),
            className: "G",
            location: "/Work4",
        },
    ];

    return (
        <div className="home">
            <div className="home-hero">
                <Nav />
                <div className="home-main-hero">
                    <h1>
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed aut unde sunt minus odio culpa nesciunt magni, at fugiat
                    quidem dolor, voluptatibus id. Ad iste repudiandae, sit
                    laudantium ex archi below are some snippets of what i do.
                </p>
                <div className="section-1-main">
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
                        Lorem ipsum dolor sit amet consectetur elit. quam velit
                        cumque sint, ipsa voluptatum odit veritatis lorem lorem
                    </p>
                </div>
                <div className="section-b">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Obcaecati illo tempora nemo distinctio at
                        voluptate vero pariatur perspiciatis quisquam eveniet.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
