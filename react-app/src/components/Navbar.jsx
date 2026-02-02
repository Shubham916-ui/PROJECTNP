import { Link, NavLink } from 'react-router-dom';
import { useMobileMenu } from '../hooks/useMobileMenu';

const Navbar = () => {
    const { isOpen, toggle, close } = useMobileMenu();

    return (
        <nav className="navbar" id="navbar">
            <div className="container nav-container">
                <Link to="/" className="nav-brand">
                    <div className="logo">
                        <img src="/logo/logo-new-2024.png" alt="SHREE SHYAM POLYMERS" width="80" height="80" style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="brand-text">
                        <span className="brand-name">SHREE SHYAM</span>
                        <span className="brand-sub">POLYMERS PVT. LTD.</span>
                    </div>
                </Link>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`} id="navMenu">
                    <li><NavLink to="/" className="nav-link" onClick={close}>HOME</NavLink></li>
                    <li><NavLink to="/about" className="nav-link" onClick={close}>ABOUT</NavLink></li>
                    <li><NavLink to="/products" className="nav-link" onClick={close}>PRODUCTS</NavLink></li>
                    <li><NavLink to="/why-us" className="nav-link" onClick={close}>WHY US</NavLink></li>
                    <li><NavLink to="/contact" className="nav-link" onClick={close}>CONTACT</NavLink></li>
                </ul>
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
