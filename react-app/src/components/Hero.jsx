import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-gradient"></div>
            <div className="container hero-container">
                <div className="hero-badge">
                    <span className="badge-icon">✨</span>
                    <span>TRUSTED SINCE 2003</span>
                </div>
                <h1 className="hero-title">
                    Quality Plastic Solutions<br />
                    <span className="gradient-text">For Nepal</span>
                </h1>
                <p className="hero-subtitle">Innovating Sustainability. Manufacturing Excellence. Building Trust.</p>
                <div className="hero-buttons">
                    <Link to="/products" className="btn btn-primary">Explore Products</Link>
                    <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
                </div>
            </div>
            <div className="hero-floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </section>
    );
};

export default Hero;
