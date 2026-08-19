import { Link } from 'react-router-dom';
import { advantages, benefits, trustFactors } from '../data/advantages';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
    FaTrophy,
    FaBolt,
    FaCheckCircle,
    FaPalette,
    FaCoins,
    FaTruck,
    FaBoxOpen,
    FaBullseye,
    FaSeedling,
    FaSmile,
    FaArrowRight,
    FaShieldAlt
} from 'react-icons/fa';

const WhyUs = () => {
    return (
        <div className="why-us-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-gradient"></div>
                <div className="container">
                    <div className="why-header-badge">
                        <FaShieldAlt /> Proven Reliability
                    </div>
                    <h1 className="page-title">Why Choose Shree Shyam Polymers</h1>
                    <p className="page-subtitle">Your trusted industry partner for superior polymer manufacturing and sustainable packaging solutions across Nepal.</p>
                </div>
            </section>

            {/* Trust Factors / Stats */}
            <section className="trust-section">
                <div className="container">
                    <div className="trust-grid">
                        {trustFactors.map((factor) => (
                            <TrustCard key={factor.id} {...factor} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="advantages-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-eyebrow">Our Strengths</span>
                        <h2 className="section-title">Our Competitive Advantages</h2>
                        <p className="section-subtitle">What sets our manufacturing standard apart in the industry</p>
                    </div>
                    <div className="advantages-grid">
                        {advantages.map((advantage) => (
                            <AdvantageCard key={advantage.id} {...advantage} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="benefits-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-eyebrow">Value Proposition</span>
                        <h2 className="section-title">Benefits of Partnering With Us</h2>
                        <p className="section-subtitle">Comprehensive manufacturing solutions engineered for your business growth</p>
                    </div>
                    <div className="benefits-grid">
                        {benefits.map((benefit) => (
                            <BenefitItem key={benefit.id} {...benefit} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us CTA */}
            <section className="why-cta-section">
                <div className="container">
                    <div className="why-cta-card">
                        <div className="why-cta-content">
                            <h2>Ready to Elevate Your Packaging & Products?</h2>
                            <p>Partner with Nepal's premier polymer manufacturer. Get in touch with our team today for tailored solutions and wholesale quotes.</p>
                        </div>
                        <div className="why-cta-actions">
                            <Link to="/contact" className="btn-why-cta-primary">
                                Contact Sales <FaArrowRight />
                            </Link>
                            <Link to="/products" className="btn-why-cta-outline">
                                Explore Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Map string keys to components
const iconMap = {
    'trophy': <FaTrophy />,
    'bolt': <FaBolt />,
    'check': <FaCheckCircle />,
    'palette': <FaPalette />,
    'coins': <FaCoins />,
    'truck': <FaTruck />
};

// Benefit icons mapping
const benefitIcons = {
    '01': <FaBoxOpen />,
    '02': <FaCheckCircle />,
    '03': <FaBullseye />,
    '04': <FaCoins />,
    '05': <FaSeedling />,
    '06': <FaSmile />
};

const AdvantageCard = ({ icon, title, description }) => {
    const ref = useScrollAnimation();
    const iconComponent = iconMap[icon] || <FaTrophy />;

    return (
        <div
            ref={ref}
            className="advantage-card scroll-animate translate-y"
        >
            <div className="advantage-icon-box">
                {iconComponent}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const TrustCard = ({ stat, label }) => {
    const ref = useScrollAnimation();

    return (
        <div
            ref={ref}
            className="trust-card scroll-animate"
        >
            <div className="trust-stat">{stat}</div>
            <div className="trust-label">{label}</div>
        </div>
    );
};

const BenefitItem = ({ number, title, description }) => {
    const ref = useScrollAnimation();
    const icon = benefitIcons[number] || <FaBolt />;

    return (
        <div
            ref={ref}
            className="benefit-item scroll-animate translate-y"
        >
            <div className="benefit-header">
                <div className="benefit-icon-box">{icon}</div>
                <span className="benefit-badge">{number}</span>
            </div>
            <div className="benefit-content">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default WhyUs;
