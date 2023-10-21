import "./Footer.css";
import logo from "../img/logo.png";
const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div className="footer-a">
                    <div className="a1">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="a2">
                        <div className="mail">
                            <p>Say Hello</p>
                            <a href="mailto:me@owhonda.com">me@owhonda.com</a>
                        </div>
                        <div className="socialss">
                            <div className="socials-1">
                                <div className="social-1 socials">
                                    <a
                                        href="https://behance.net/owhonda"
                                        target="blank"
                                    >
                                        <span>Behance</span>
                                    </a>
                                </div>
                                <div className="social-2 socials">
                                    <a
                                        target="blank"
                                        href="https://www.linkedin.com/in/owhondanwokekoro"
                                    >
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                            <div className="social-5 socials-2">
                                <span>Birmingham </span>
                                <span>United Kingdom</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-b">
                    <div
                        className="copy-1"
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                    >
                        OWHONDA.COM
                    </div>
                </div>
                <div className="footer-c">
                    <div className="copy-2">
                        Copyright © 2023 OWHONDA. All Rights Reserved{" "}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
