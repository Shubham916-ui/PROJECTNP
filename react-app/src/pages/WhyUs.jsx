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
    FaSmile
} from 'react-icons/fa';

const WhyUs = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-gradient"></div>
                <div className="container">
                    <h1 className="page-title">Why Choose Us</h1>
                    <p className="page-subtitle">Your trusted partner for quality plastic solutions</p>
                </div>
            </section>

            {/* Advantages */}
            <section className="advantages-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Competitive Advantages</h2>
                        <p className="section-subtitle">What sets us apart in the industry</p>
                    </div>
                    <div className="advantages-grid">
                        {advantages.map((advantage) => (
                            <AdvantageCard key={advantage.id} {...advantage} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Factors */}
            <section className="trust-section">
                <div className="container">
                    <div className="trust-grid">
                        {trustFactors.map((factor) => (
                            <TrustCard key={factor.id} {...factor} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="benefits-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Benefits of Partnering With Us</h2>
                        <p className="section-subtitle">What you get when you choose us</p>
                    </div>
                    <div className="benefits-grid">
                        {benefits.map((benefit) => (
                            <BenefitItem key={benefit.id} {...benefit} />
                        ))}
                    </div>
                </div>
            </section>
        </>
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
    const [ref, isVisible] = useScrollAnimation();
    // Get the icon component from the map using the string key
    const iconComponent = iconMap[icon] || <FaTrophy />;

    return (
        <div
            ref={ref}
            className="advantage-card"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
        >
            <div className="advantage-icon">{iconComponent}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const TrustCard = ({ stat, label }) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <div
            ref={ref}
            className="trust-card"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(0.9)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
        >
            <div className="trust-stat">{stat}</div>
            <div className="trust-label">{label}</div>
        </div>
    );
};

const BenefitItem = ({ number, title, description }) => {
    const [ref, isVisible] = useScrollAnimation();
    const icon = benefitIcons[number] || <FaBolt />;

    return (
        <div
            ref={ref}
            className="benefit-item"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
        >
            <div className="benefit-icon">{icon}</div>
            <div className="benefit-number">{number}</div>
            <div className="benefit-content">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default WhyUs;
