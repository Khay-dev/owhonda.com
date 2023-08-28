import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
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
                <div className="section-a">MY EXPERTISE</div>
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
                    FUN <br /> TIME
                </div>
                <div className="section-b">
                    <div className=".swiper-button-next">custom next btn</div>
                    <div className=".swiper-button-prev">custom prev btn</div>
                    <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        navigation={{
                            nextel: ".swiper-button-next",
                            prevel: ".swiper-button-prev",
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;
