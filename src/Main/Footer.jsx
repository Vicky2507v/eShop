import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { NavLink } from "react-router-dom";



export const Footer = () => {
    return (
        <>
            <footer>
                <div className="shop-name">
                    <h2>Shop Central </h2>
                </div>

                <div className="slogan">
                    <p>Everything you need, all in one place — from fashion to tech, built for your lifestyle.</p>
                </div>

                <div className="social-media-handles">
                    <CiFacebook />
                    <FaInstagram />
                    <CiTwitter />
                    <CiYoutube />
                </div>

                <div className="other-items">
                    <div className="quick-links">
                        <h4>Quick Links</h4>
                        <NavLink to="#home">Home</NavLink>
                        <NavLink to="#components">Components</NavLink>
                        <NavLink to="#aboutUs">About Us</NavLink>
                        <NavLink to="#contact">Contact</NavLink>
                    </div>

                    <div className="supports">
                        <h4>Support</h4>
                        <NavLink to="#faq">FAQ</NavLink>
                        <NavLink to="#shopping">Shopping</NavLink>
                        <NavLink to="#return">Return</NavLink>
                        <NavLink to="#privacyPolicy">Privacy Policy</NavLink>
                    </div>

                    <div className="email-section">
                        <input type="email" name="email" />
                        <button type="submit">Submit</button>
                    </div>
                </div>
                <p>© 2025 ShopCentral. All rights reserved.</p>
            </footer>
        </>
    )
}