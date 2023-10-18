import Nav from "../components/Nav";
import "../styles/Contact.css";

import logo from "../img/logo.png";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-hero">
                <Nav />
                <div className="contact-main-hero">
                    <span>Eager to take on new creative projects.</span>
                    <p> Lets collaborate and bring your ideas to life</p>
                </div>
            </div>
            <section className="section-contact">
                <div className="section-1">
                    <img src={logo} alt="logo" />
                </div>
                <div className="socials">
                    <div className="section-2">
                        <span>Birmingham </span>
                        <span>United Kingdom</span>
                    </div>
                    <div className="section-3">
                        <a href="#">
                            <span>LinkedIn</span>
                        </a>
                        <a href="#">
                            <span>Behance</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
