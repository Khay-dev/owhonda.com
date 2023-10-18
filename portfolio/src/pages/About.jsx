import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/About.css";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { EffectCreative, Navigation } from "swiper/modules";
import Image1 from "../img/hero.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image2 from "../img/gym.jpg";
import Image3 from "../img/cook.jpg";
import Image4 from "../img/karate.jpg";
import Image5 from "../img/music.jpg";

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="about">
            <div className="about-hero">
                <Nav />
                <div className="about-main-hero">
                    <span
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1200"
                    >
                        EXPLORE THE CREATOR
                    </span>
                </div>
            </div>
            <section className="section-about-1">
                <div className="section-a">
                    <div>
                        <span> USER-CENTRIC</span> CREATIVE DESIGNER
                    </div>
                    <p>
                        I am a creative designer with a wealth of experience
                        spanning various domains, including website development,
                        brand identity design, and <span>UI/UX</span>. Over the
                        course of my diverse career Whether I am working
                        collaboratively with a team or independently, my
                        approach consistently centers on the user. Originally a
                        Nigerian, I currently reside in the UK, where I am
                        pursuing a masters degree in cybersecurity in the
                        University of Wolverhampton.
                    </p>
                </div>
                <div className="section-b">
                    <img
                        src={Image1}
                        alt=""
                        data-aos="zoom-in-left"
                        data-aos-duration="1200"
                    />
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
                                    <img src={Image2} alt="" />
                                </div>
                                <div className="b">
                                    <h2>FITNESS</h2>
                                    <p>
                                        Fitness is a cornerstone of my daily
                                        life, an unwavering commitment to
                                        maintaining a healthy, active lifestyle
                                        that goes far beyond the realm of
                                        <span> UI/UX </span>
                                        design. It is about pushing my physical
                                        boundaries, whether I am lacing up my
                                        running shoes for an invigorating
                                        morning jog or tackling a high volume
                                        lifting session. I am fueled by the
                                        desire to be the best version of myself,
                                        and my fitness routine plays a pivotal
                                        role in achieving that goal.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div className="main-swiper">
                                <div className="a">
                                    {" "}
                                    <img src={Image3} alt="" />
                                </div>
                                <div className="b">
                                    <h2>COOKING</h2>
                                    <p>
                                        Sunday Therapy, our cherished weekly
                                        tradition, is all about bonding through
                                        cooking. With my three kids, we don chef
                                        hats and aprons on Sundays, transforming
                                        our kitchen into a creative hub. We
                                        experiment with flavors, create
                                        delicious dishes, and share plenty of
                                        laughter. These moments are more than
                                        just meals; they are a treasure trove of
                                        memories, strengthening the family bonds
                                        that mean the world to me.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="main-swiper">
                                <div className="a">
                                    {" "}
                                    <img src={Image4} alt="" />
                                </div>
                                <div className="b">
                                    <h2>KARATE</h2>
                                    <p>
                                        When I step out of the design world, I
                                        embrace the discipline and artistry of
                                        karate. This martial art is more than
                                        just a hobby for me; it is a passion
                                        that I have devoted countless hours to
                                        perfecting. Karate embodies both self
                                        discipline and the art of self defense,
                                        providing a profound sense of balance in
                                        my life. I am currently a blue belt in
                                        Shotokan karate
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div className="main-swiper">
                                <div className="a">
                                    {" "}
                                    <img src={Image5} alt="" />
                                </div>
                                <div className="b">
                                    <h2>MUSIC</h2>
                                    <p>
                                        Music is where my soul finds solace and
                                        inspiration. I am an ardent listener,
                                        with a penchant for the diverse genres
                                        of jazz, indie folk, hip hop, RnB, and
                                        alternative rock. Whether it is the
                                        smooth melodies of jazz, the soulful
                                        rhythms of RnB, the storytelling in
                                        folk, the beats of hip hop, or the
                                        energy of alternative rock, music allows
                                        me to unwind and recharge, offering me a
                                        means to step away from the digital
                                        world and return to my design work with
                                        renewed vigor and inspiration. Checkout
                                        my 2023 work playlist.
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
