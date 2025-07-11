import React from "react";
import { Link } from "react-router-dom";
import small_logo from "../images/small_logo.png";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo-section">
                        <img src={small_logo} alt="Little Lemon small logo" className="footer-logo" />
                    </div>
                    <div className="footer-links">
                        <h4>Navigation</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/booking">Reservations</Link></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <ul>
                            <li>123 Lemon St, Chicago, IL</li>
                            <li>(312) 555-1234</li>
                            <li>contact@littlelemon.com</li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4>Social Media</h4>
                        <ul>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
