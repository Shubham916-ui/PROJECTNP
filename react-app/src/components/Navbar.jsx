import { Link, NavLink } from 'react-router-dom';
import { useScrollEffect } from '../hooks/useScrollEffect';
import { useMobileMenu } from '../hooks/useMobileMenu';
import ThemeToggle from './ThemeToggle';

import logo from '../assets/Icons/logo-new.png';

const Navbar = () => {
    const isScrolled = useScrollEffect();
    const { isOpen, toggle, close } = useMobileMenu();

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container nav-container">
                <Link to="/" className="nav-brand">
                    <div className="logo">
                        <img src={logo} alt="SHREE SHYAM POLYMERS" width="80" height="80" style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="brand-text">
                        <span className="brand-name">SHREE SHYAM</span>
                        <span className="brand-sub">POLYMERS PVT. LTD.</span>
                    </div>
                </Link>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`} id="navMenu">
                    <li>
                        <NavLink to="/" className="nav-link" onClick={close}>
                            <span className="nav-link-inner">
                                <span className="nav-text-main">HOME</span>
                                <span className="nav-text-hover">HOME</span>
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav-link" onClick={close}>
                            <span className="nav-link-inner">
                                <span className="nav-text-main">ABOUT</span>
                                <span className="nav-text-hover">ABOUT</span>
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className="nav-link" onClick={close}>
                            <span className="nav-link-inner">
                                <span className="nav-text-main">PRODUCTS</span>
                                <span className="nav-text-hover">PRODUCTS</span>
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/why-us" className="nav-link" onClick={close}>
                            <span className="nav-link-inner">
                                <span className="nav-text-main">WHY US</span>
                                <span className="nav-text-hover">WHY US</span>
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="nav-link" onClick={close}>
                            <span className="nav-link-inner">
                                <span className="nav-text-main">CONTACT</span>
                                <span className="nav-text-hover">CONTACT</span>
                            </span>
                        </NavLink>
                    </li>
                </ul>
                <ThemeToggle />
                <div className={`hamburger ${isOpen ? 'active' : ''}`} id="hamburger" onClick={toggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
