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
                            <a href="mailto:XXXXX">me@owhonda.com</a>
                        </div>
                        <div className="socialss">
                            <div className="socials-1">
                                <div className="social-1 socials">
                                    <a href="#">
                                        <span>Instagram</span>
                                    </a>
                                </div>
                                <div className="social-2 socials">
                                    <a href="#">
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                            <div className="socials-2">
                                <div className="social-3 socials">
                                    <a href="#">
                                        <span>Behance</span>
                                    </a>
                                </div>
                                <div className="social-4 socials">
                                    <a href="#">
                                        <span>Twitter</span>
                                    </a>
                                </div>
                            </div>
                            <div className="social-5 socials-3">
                                <span>Birmingham </span>
                                <span>United Kingdom</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-b">
                    <div className="copy-1">OWHONDA.COM</div>
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
