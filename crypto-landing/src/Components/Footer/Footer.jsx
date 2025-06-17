import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">

                <div className="footer__top">
                    <h3>Stay in the loop</h3>
                    <p>Get crypto news and updates delivered to your inbox.</p>
                    <form className="footer__form">
                        <input type="email" placeholder="Your email" required />
                        <button type="submit">→</button>
                    </form>
                </div>

                <div className="footer__links">
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="/terms">Terms</a></li>
                            <li><a href="/privacy">Privacy</a></li>
                            <li><a href="/cookies">Cookies</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Follow Us</h4>
                        <ul className="footer__socials">
                            <li><a href="#">X</a></li>
                            <li><a href="#">Discord</a></li>
                            <li><a href="#">Telegram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} CryptoCorp. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;