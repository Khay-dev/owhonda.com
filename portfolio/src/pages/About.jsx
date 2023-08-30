import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/About.css";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
// import required modules
import { EffectCreative, Navigation } from "swiper/modules";
import Image1 from "../img/hero.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="about-hero">
                <Nav />
                <div className="about-main-hero">
                    <span>EXPLORE THE CREATOR </span>
                </div>
            </div>
            <section className="section-about-1">
                <div className="section-a">
                    <div>
                        Lorem ipsum dolor sit amet,elit elit elit Accusamu
                        Lorem, ipsum dolor.
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque pariatur porro veniam soluta magni totam quae
                        mollitia itaque Lorem ipsum dolor sit amet. Lorem ipsum
                        dolor sit amet elit. natus Lorem ipsum dolor sit amet
                        elit. Fuga velit eius totam illo non eos esse sunt
                        aliquid.
                    </p>
                </div>
                <div className="section-b">
                    <img src={Image1} alt="" />
                </div>
            </section>
            <section className="section-2-about">
                <div className="section-a">
                    MY <br /> EXPERTISE
                </div>
                <div className="section-about-2">
                    <div className="section-b">
                        <h4>Product Design</h4>
                        <p>
                            Crafting seamless experiences through thoughtful and
                            innovative design solutions.
                        </p>
                    </div>
                    <div className="section-c">
                        <h4>Branding Strategy</h4>
                        <p>
                            Elevating brands through strategic insights and
                            captivating visual narratives.
                        </p>
                    </div>
                    <div className="section-d">
                        <h4>Content Strategy</h4>
                        <p>
                            Shaping narratives to engage, inform, and inspire
                            audiences effectively.
                        </p>
                    </div>
                    <div className="section-e">
                        <h4>Visual Design</h4>
                        <p>
                            Arranging visuals for clear, engaging communication
                            across mediums and platforms.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section-3-about">
                <div className="section-a">
                    <p>
                        FUN <br /> TIME
                    </p>
                </div>
                <div className="section-b">
                    <div className="section-b-btn">
                        <div className="prev">
                            <BiChevronsLeft />
                        </div>
                        <div className="next">
                            <BiChevronsRight />
                        </div>
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
                            <div className="main-swiper">
                                <div className="a">
                                   
                                </div>
                                <div className="b">
                                    <h2>GYM</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Nobis animi dolores
                                        qui quam eos numquam neque ullam
                                        similique, beatae temporibus maxime sit
                                        labore dicta quis, eaque exercitationem
                                        perferendis, atque accusamus.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div className="main-swiper">
                                <div className="a">
                                </div>
                                <div className="b">
                                    <h2>COOKING</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Nobis animi dolores
                                        qui quam eos numquam neque ullam
                                        similique, beatae temporibus maxime sit
                                        labore dicta quis, eaque exercitationem
                                        perferendis, atque accusamus.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="main-swiper">
                                <div className="a">
                                </div>
                                <div className="b">
                                    <h2>KARATE</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Nobis animi dolores
                                        qui quam eos numquam neque ullam
                                        similique, beatae temporibus maxime sit
                                        labore dicta quis, eaque exercitationem
                                        perferendis, atque accusamus.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div className="main-swiper">
                                <div className="a">
                                </div>
                                <div className="b">
                                    <h2>MUSIC</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Nobis animi dolores
                                        qui quam eos numquam neque ullam
                                        similique, beatae temporibus maxime sit
                                        labore dicta quis, eaque exercitationem
                                        perferendis, atque accusamus.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;
