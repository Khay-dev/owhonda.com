import Nav from "../components/Nav";
import "../styles/AllWork.css";
import { BsArrowUpRight } from "react-icons/bs";
import Footer from "../components/Footer";
import image2 from "../img/brand2.jpg";
import image3 from "../img/brand3.jpg";
import { Link } from "react-router-dom";
const WorkA = () => {
    return (
        <div className="work">
            <div className="work-hero">
                <Nav />
            </div>
            <section className="section-work-main">
                <div className="section-1-work">
                    <div className="section-a">
                        <h4>Lorem consectetur</h4>
                        <p>lorem ipsum ipsum ipsum ipsum ipsum.</p>
                    </div>
                    <div className="section-b">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Obcaecati illo tempora nemo distinctio at
                            voluptate vero pariatur perspiciatis quisquam
                            eveniet.
                        </p>
                        <a href="#">
                            <span>Full Project</span>
                            <span className="span-2">
                                <BsArrowUpRight />
                            </span>
                        </a>
                    </div>
                </div>
                <div className="section-2-work">
                    <div className="main-swiperr">
                        <img src={image2} alt="" />
                    </div>
                    <div className="main-swiperr">
                        <img src={image3} alt="" />
                    </div>
                    <div className="main-swiperr">
                        <img src={image2} alt="" />
                    </div>
                    <div className="main-swiperr">
                        <img src={image3} alt="" />
                    </div>
                </div>
            </section>
            <div className="section-3-work">
                <div className="container">
                    <Link to="/Work5" className="items" href="#">
                        <div className="item-1">
                            <h4>Lorem Ipsumm5</h4>
                            <p>lorem lorem lorem </p>
                        </div>
                        <div className="item-2">
                            <img src={image2} alt="" />
                        </div>
                    </Link>
                    <Link to="/Work7" className="items" href="#">
                        <div className="item-1">
                            <h4>Lorem Ipsumm7</h4>
                            <p>lorem lorem lorem </p>
                        </div>
                        <div className="item-2">
                            <img src={image2} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WorkA;
