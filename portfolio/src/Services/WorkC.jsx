import Nav from "../components/Nav";
import "../styles/AllWork.css";
import { BsArrowUpRight } from "react-icons/bs";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
// import required modules
import { EffectCreative, Navigation } from "swiper/modules";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
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
                    <div className="prev">
                        <AiOutlineArrowLeft />
                    </div>
                    <Swiper
                        navigation={{ prevEl: ".prev", nextEl: ".next" }}
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ["100%", 0, 0],
                            },
                        }}
                        modules={[EffectCreative, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="main-swiperr">
                                <img src={image2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div className="main-swiperr">
                                <img src={image3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div className="main-swiperr">
                                <img src={image2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div className="main-swiperr">
                                <img src={image3} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="next">
                        <AiOutlineArrowRight />
                    </div>
                </div>
            </section>
            <div className="section-3-work">
                <div className="container">
                    <Link to="/Work2" className="items" href="#">
                        <div className="item-1">
                            <h4>Lorem Ipsumm2</h4>
                            <p>lorem lorem lorem </p>
                        </div>
                        <div className="item-2">
                            <img src={image2} alt="" />
                        </div>
                    </Link>
                    <Link to="/Work4" className="items" href="#">
                        <div className="item-1">
                            <h4>Lorem Ipsumm4</h4>
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
