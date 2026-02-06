import { Link } from 'react-router-dom';
import locationIcon from '../assets/Icons/location_1819846.png';
import phoneIcon from '../assets/Icons/telephone_171548.png';
import emailIcon from '../assets/Icons/email_238842.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="footer-logo">
                            <div className="brand-text">
                                <span className="brand-name">SHREE SHYAM</span>
                                <span className="brand-sub">POLYMERS PVT. LTD.</span>
                            </div>
                        </div>
                        <p className="footer-tagline">Strong Plastics. Smart Solutions.</p>
                        <p className="footer-text">Quality manufacturing since 2003, trusted across Nepal for reliability and excellence.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/why-us">Why Choose Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Products</h4>
                        <ul className="footer-links">
                            <li><Link to="/products#hdpe-pipes">HDPE Pipes</Link></li>
                            <li><Link to="/products#garbage-bags">Garbage Bags</Link></li>
                            <li><Link to="/products#mulch-films">Mulch Films</Link></li>
                            <li><Link to="/products#grow-bags">Grow Bag</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact Info</h4>
                        <ul className="footer-contact">
                            <li>
                                <span style={{ WebkitMaskImage: `url(${locationIcon})`, maskImage: `url(${locationIcon})` }} className="footer-icon"></span>
                                <div>Omsatiya-2, (Padsari)  <br />bhairahawa, Nepal</div>
                            </li>
                            <li>
                                <span style={{ WebkitMaskImage: `url(${phoneIcon})`, maskImage: `url(${phoneIcon})` }} className="footer-icon"></span>
                                <span>071 421042</span>
                            </li>
                            <li>
                                <span style={{ WebkitMaskImage: `url(${emailIcon})`, maskImage: `url(${emailIcon})` }} className="footer-icon"></span>
                                <span>shyampolynepal@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 SHREE SHYAM POLYMERS PVT. LTD. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
