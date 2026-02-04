import { timeline, coreValues, marketSegments } from '../data/timeline';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
    FaStar,
    FaBullseye,
    FaLightbulb,
    FaSeedling,
    FaIndustry,
    FaLeaf,
    FaBoxOpen,
    FaHome
} from 'react-icons/fa';

const About = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-gradient"></div>
                <div className="container">
                    <h1 className="page-title">About Us</h1>
                    <p className="page-subtitle">Building Trust Through Quality Since 2003</p>
                </div>
            </section>

            {/* Company Story */}
            <section className="company-story">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <div className="section-badge">Our Story</div>
                            <h2>20+ Years of Manufacturing Excellence</h2>
                            <p>SHREE SHYAM POLYMERS PVT. LTD. is a well-established plastic manufacturing company based in
                                Bhairahawa, Nepal. Founded in 2003, we have built a strong reputation for delivering reliable,
                                durable, and cost-effective plastic products for agriculture, packaging, sanitation, and
                                industrial use.</p>
                            <p>With decades of manufacturing experience and a deep understanding of market needs, we focus on
                                quality production, consistent supply, and customer satisfaction. Our products are widely
                                trusted by farmers, businesses, retailers, and institutions across Nepal.</p>
                        </div>
                        <div className="story-visual">
                            {/* Timeline */}
                            <div className="timeline">
                                {timeline.map((item, index) => (
                                    <TimelineItem key={item.id} {...item} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="vm-section">
                <div className="container">
                    <div className="vm-grid">
                        <VMCard
                            icon={
                                <svg viewBox="0 0 64 64" width="64" height="64">
                                    <defs>
                                        <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#FF6B35', stopOpacity: 1 }} />
                                            <stop offset="50%" style={{ stopColor: '#FFB800', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="32" cy="32" r="28" fill="url(#visionGrad)" opacity="0.2" />
                                    <circle cx="32" cy="32" r="20" fill="url(#visionGrad)" opacity="0.3" />
                                    <circle cx="32" cy="32" r="12" fill="url(#visionGrad)" />
                                    <circle cx="32" cy="32" r="4" fill="#fff" />
                                    <path d="M 32 12 L 35 22 L 32 20 L 29 22 Z" fill="url(#visionGrad)" />
                                </svg>
                            }
                            title="Our Vision"
                            content="To be Nepal's most trusted and innovative plastic products manufacturer, setting industry standards for quality and sustainability."
                        />
                        <VMCard
                            icon={
                                <svg viewBox="0 0 64 64" width="64" height="64">
                                    <defs>
                                        <linearGradient id="missionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#FF6B35', stopOpacity: 1 }} />
                                            <stop offset="50%" style={{ stopColor: '#FFB800', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <ellipse cx="32" cy="50" rx="8" ry="3" fill="url(#missionGrad)" opacity="0.3" />
                                    <path d="M 32 10 L 28 25 L 32 25 L 32 48 L 32 25 L 36 25 Z" fill="url(#missionGrad)" />
                                    <path d="M 20 30 Q 32 25 44 30" stroke="url(#missionGrad)" strokeWidth="2" fill="none" />
                                    <circle cx="32" cy="8" r="3" fill="#fff" />
                                    <path d="M 28 48 L 32 42 L 36 48 L 40 42" stroke="url(#missionGrad)" strokeWidth="2" fill="none" />
                                </svg>
                            }
                            title="Our Mission"
                            content={
                                <ul className="mission-list">
                                    <li>Deliver superior quality plastic products</li>
                                    <li>Invest in cutting-edge technology</li>
                                    <li>Provide exceptional customer service</li>
                                    <li>Promote sustainable manufacturing</li>
                                </ul>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle">The principles that guide everything we do</p>
                    </div>
                    <div className="values-grid">
                        {coreValues.map((value) => (
                            <ValueCard key={value.id} {...value} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Market Presence */}
            <section className="market-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Market Presence</h2>
                        <p className="section-subtitle">Serving diverse industries across Nepal</p>
                    </div>
                    <div className="segments-grid">
                        {marketSegments.map((segment) => (
                            <SegmentCard key={segment.id} {...segment} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Standards */}
            <section className="quality-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Quality Standards</h2>
                    </div>
                    <div className="standards-grid">
                        <StandardItem number="01" title="Raw Material Selection" description="Only premium-grade polymers from certified suppliers" />
                        <StandardItem number="02" title="Manufacturing Process" description="State-of-the-art equipment with automated quality checks" />
                        <StandardItem number="03" title="Product Testing" description="Rigorous testing for durability, strength, and safety" />
                        <StandardItem number="04" title="Customer Satisfaction" description="Continuous feedback loop and improvement process" />
                    </div>
                </div>
            </section>
        </>
    );
};

// Maps for icons
const valueIconMap = {
    'star': <FaStar />,
    'target': <FaBullseye />,
    'lightbulb': <FaLightbulb />,
    'seedling': <FaSeedling />
};

const segmentIconMap = {
    'industry': <FaIndustry />,
    'wheat': <FaLeaf />,
    'box': <FaBoxOpen />,
    'home': <FaHome />
};

const TimelineItem = ({ year, title, description, index }) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <div
            ref={ref}
            className="timeline-item"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : `translateX(${index % 2 === 0 ? '-50px' : '50px'})`,
                transition: 'all 0.6s ease'
            }}
        >
            <div className="timeline-year">{year}</div>
            <div className="timeline-content">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

const VMCard = ({ icon, title, content }) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <div
            ref={ref}
            className="vm-card"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
        >
            <div className="vm-icon">{icon}</div>
            <h3>{title}</h3>
            <div className="vm-content">{content}</div>
        </div>
    );
};

const ValueCard = ({ icon, title, description }) => {
    const [ref, isVisible] = useScrollAnimation();
    const iconComponent = valueIconMap[icon] || <FaStar />;

    return (
        <div
            ref={ref}
            className="value-card"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
        >
            <div className="value-icon">{iconComponent}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const SegmentCard = ({ icon, title, description }) => {
    const [ref, isVisible] = useScrollAnimation();
    const iconComponent = segmentIconMap[icon] || <FaIndustry />;

    return (
        <div
            ref={ref}
            className="segment"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
        >
            <div className="segment-icon">{iconComponent}</div>
            <div className="segment-content">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

const StandardItem = ({ number, title, description }) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <div
            ref={ref}
            className="standard-item"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
        >
            <div className="standard-number">{number}</div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default About;
