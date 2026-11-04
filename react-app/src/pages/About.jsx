import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { companyProfile } from '../data/companyProfile';
import LeadershipTeam from '../components/LeadershipTeam';
import {
    FaIndustry,
    FaCheckCircle,
    FaEye,
    FaBullseye,
    FaShieldAlt,
    FaHandshake,
    FaCogs,
    FaRecycle,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaArrowRight,
    FaPrint
} from 'react-icons/fa';

/* ── Animation Variants ── */
const easeOutCubic = [0.22, 1, 0.36, 1];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOutCubic }
    }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -35 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.65, ease: easeOutCubic }
    }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 35 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.65, ease: easeOutCubic }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

/* ═══════════════════════════════════════════════
   MAIN ABOUT PAGE COMPONENT
   ═══════════════════════════════════════════════ */
const About = () => {
    return (
        <div className="about-page">
            {/* 1. Hero with Real Factory Showcase */}
            <AboutHero />

            {/* 2. Company Overview & Production Floor */}
            <CompanyOverview />

            {/* 3. Strategic Vision & Mission */}
            <VisionMission />

            {/* 4. Quality & Manufacturing Standards */}
            <QualityStandards />

            {/* 5. Market Presence */}
            <MarketPresence />

            {/* 6. Core Values */}
            <CoreValues />

            {/* 7. Executive Leadership Team */}
            <LeadershipTeam />

            {/* 8. Commitment to Sustainability */}
            <SustainabilityCommitment />

            {/* 9. Manufacturing Journey Timeline */}
            <JourneyTimeline />

            {/* 10. Direct Plant Contact & Catalog CTA */}
            <AboutCTA />
        </div>
    );
};

/* ── 1. Hero Banner with Real Factory Photo ── */
const AboutHero = () => {
    return (
        <section className="about-hero">
            <div className="about-hero-overlay" />
            <div className="container about-hero-container">
                <div className="about-hero-grid">
                    {/* Left: Headline & Corporate Bio */}
                    <motion.div
                        className="about-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span className="about-hero-badge" variants={fadeInUp}>
                            <FaIndustry className="badge-icon" /> Established {companyProfile.established} · Bhairahawa, Nepal
                        </motion.span>
                        <motion.h1 className="about-hero-title" variants={fadeInUp}>
                            {companyProfile.name}
                        </motion.h1>
                        <motion.p className="about-hero-tagline" variants={fadeInUp}>
                            {companyProfile.tagline}
                        </motion.p>
                        <motion.p className="about-hero-sub" variants={fadeInUp}>
                            A well-established plastic manufacturing enterprise based in Bhairahawa, Nepal. Delivering dependable, durable, and cost-effective polymer solutions for agriculture, packaging, sanitation, and industrial use across the nation.
                        </motion.p>
                        <motion.div className="about-hero-cta-btns" variants={fadeInUp}>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                                <Link to="/products" className="btn btn-primary">
                                    Explore Products <FaArrowRight />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                                <Link to="/contact" className="btn btn-secondary">
                                    Contact Factory
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Real Factory Showcase Photo */}
                    <motion.div
                        className="about-hero-image-wrapper"
                        initial={{ opacity: 0, x: 40, scale: 0.96 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: easeOutCubic }}
                    >
                        <motion.div
                            className="hero-factory-card"
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        >
                            <img
                                src="/photos/hero-factory.png"
                                alt="Shree Shyam Polymers Manufacturing Plant in Bhairahawa"
                                className="hero-factory-img"
                            />
                            <div className="factory-badge-overlay">
                                <div className="badge-pill">
                                    <FaIndustry /> Omsatiya-2, Padsari, Bhairahawa
                                </div>
                                <div className="badge-stat">
                                    <strong>20+ Years</strong> of Manufacturing Excellence
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Stats Strip */}
                <motion.div
                    className="about-hero-stats"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {[
                        { num: '2003', label: 'Founded in Bhairahawa' },
                        { num: '20+ Years', label: 'Manufacturing Experience' },
                        { num: 'NS-40:2079', label: 'Certified HDPE Pipes' },
                        { num: 'Nationwide', label: 'Supply Network in Nepal' }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="hero-stat-card"
                            variants={fadeInUp}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <span className="stat-number">{stat.num}</span>
                            <span className="stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

/* ── 2. Company Overview & Production Floor ── */
const CompanyOverview = () => {
    return (
        <section className="about-overview-section">
            <div className="container">
                <div className="about-overview-grid">
                    {/* Left: Authentic Company Narrative */}
                    <motion.div
                        className="overview-text-col"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInLeft}
                    >
                        <span className="section-eyebrow">About the Company</span>
                        <h2 className="section-title">Decades of Polymer Manufacturing in Nepal</h2>

                        <p className="overview-p">
                            {companyProfile.aboutParagraphs[0]}
                        </p>
                        <p className="overview-p">
                            {companyProfile.aboutParagraphs[1]}
                        </p>

                        <div className="overview-highlights-list">
                            <motion.div className="highlight-item" whileHover={{ x: 4 }}>
                                <FaCheckCircle className="highlight-icon" />
                                <span>High-output blown film extrusion for LDPE, HDPE & PP materials</span>
                            </motion.div>
                            <motion.div className="highlight-item" whileHover={{ x: 4 }}>
                                <FaCheckCircle className="highlight-icon" />
                                <span>In-house solid-color flexographic printing for custom company branding</span>
                            </motion.div>
                            <motion.div className="highlight-item" whileHover={{ x: 4 }}>
                                <FaCheckCircle className="highlight-icon" />
                                <span>Dependable high-volume inventory for agricultural seasons and wholesale trade</span>
                            </motion.div>
                        </div>

                        <div className="overview-address-box">
                            <div className="address-item">
                                <FaMapMarkerAlt className="address-icon" />
                                <div>
                                    <strong>Plant Address:</strong> Omsatiya-2, (Padsari) Bhairahawa, Nepal
                                </div>
                            </div>
                            <div className="address-item">
                                <FaPhoneAlt className="address-icon" />
                                <div>
                                    <strong>Factory Contact:</strong> 071 421042 / shyampolynepal@gmail.com
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Real Production Floor Image */}
                    <motion.div
                        className="overview-visual-col"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInRight}
                    >
                        <motion.div
                            className="overview-image-card"
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        >
                            <img
                                src="/photos/real-flexo-3.png"
                                alt="Production floor flexo press in action at Shree Shyam Polymers"
                                className="overview-machine-img"
                            />
                            <div className="overview-image-caption">
                                <div className="caption-tag">
                                    <FaPrint /> Production Floor
                                </div>
                                <h4>High-Speed Extrusion & Flexo Printing</h4>
                                <p>Modern manufacturing machinery ensuring uniform gauge, leak-proof sealing, and sharp branding.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

/* ── 3. Vision & Mission ── */
const VisionMission = () => {
    return (
        <section className="about-vm-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <span className="section-eyebrow">Strategic Direction</span>
                    <h2 className="section-title">Our Vision & Mission</h2>
                    <p className="section-subtitle">
                        Clear, grounded commitments driving our daily manufacturing and customer relationships.
                    </p>
                </motion.div>

                <div className="about-vm-grid">
                    {/* Vision Card */}
                    <motion.div
                        className="about-vm-card vision-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInLeft}
                        whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    >
                        <div className="vm-header">
                            <motion.div
                                className="vm-icon-box"
                                whileHover={{ rotate: 10, scale: 1.08 }}
                            >
                                <FaEye />
                            </motion.div>
                            <div className="vm-title-wrap">
                                <span className="vm-pill">Vision</span>
                                <h3>Our Long-Term Vision</h3>
                            </div>
                        </div>

                        <p className="vm-lead-statement">
                            "To be a trusted and leading plastic manufacturing company in Nepal, delivering high-quality products that support agriculture, hygiene, packaging, and sustainable development."
                        </p>

                        <div className="vm-points-list">
                            {[
                                { title: 'Agricultural Support', desc: 'Developing reliable mulch films, grow bags, and nursery products for farmers across Nepal.' },
                                { title: 'Hygiene & Sanitation', desc: 'Providing leak-proof, durable waste management bags for clean communities and healthcare.' },
                                { title: 'Industrial Packaging', desc: 'Supplying heavy-duty shrink films and woven sacks for commercial supply chains.' },
                                { title: 'Sustainable Growth', desc: 'Balancing dependable industrial manufacturing with environmental responsibility.' }
                            ].map((pt, idx) => (
                                <motion.div
                                    key={idx}
                                    className="vm-point-item"
                                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                                >
                                    <FaCheckCircle className="vm-point-icon" />
                                    <div>
                                        <strong>{pt.title}:</strong> {pt.desc}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        className="about-vm-card mission-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInRight}
                        whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    >
                        <div className="vm-header">
                            <motion.div
                                className="vm-icon-box"
                                whileHover={{ rotate: -10, scale: 1.08 }}
                            >
                                <FaBullseye />
                            </motion.div>
                            <div className="vm-title-wrap">
                                <span className="vm-pill">Mission</span>
                                <h3>Our Core Mission</h3>
                            </div>
                        </div>

                        <p className="vm-lead-statement">
                            "Our day-to-day manufacturing commitments that guide our factory operations, customer service, and product standards:"
                        </p>

                        <div className="vm-points-list">
                            {[
                                { title: 'Affordable Reliability', desc: 'To manufacture strong, reliable, and affordable plastic products for every user.' },
                                { title: 'Consistent Quality', desc: 'To maintain strict gauge and strength control through modern manufacturing practices.' },
                                { title: 'Dependable Solutions', desc: 'To support farmers, businesses, and communities with uninterrupted supply.' },
                                { title: 'Continuous Improvement', desc: 'To innovate and upgrade production based on practical customer feedback.' }
                            ].map((pt, idx) => (
                                <motion.div
                                    key={idx}
                                    className="vm-point-item"
                                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                                >
                                    <FaCheckCircle className="vm-point-icon" />
                                    <div>
                                        <strong>{pt.title}:</strong> {pt.desc}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

/* ── 4. Quality & Manufacturing Standards ── */
const QualityStandards = () => {
    return (
        <section className="about-standards-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <span className="section-eyebrow">Manufacturing Integrity</span>
                    <h2 className="section-title">Quality & Manufacturing Standards</h2>
                    <p className="section-subtitle">
                        We ensure that every product meets practical performance expectations before reaching the market.
                    </p>
                </motion.div>

                <div className="standards-layout">
                    {/* Real Plant Image Showcase */}
                    <motion.div
                        className="standards-photo-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInLeft}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    >
                        <img
                            src="/photos/real-flexo-1.png"
                            alt="Quality print inspection and roll winding at Shree Shyam Polymers"
                            className="standards-img"
                        />
                        <div className="standards-overlay-chip">
                            <strong>Standardized Quality</strong>
                            <span>Strict thickness & burst strength inspection</span>
                        </div>
                    </motion.div>

                    {/* 4 Standards Cards */}
                    <motion.div
                        className="standards-cards-col"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        {companyProfile.qualityStandards.map((std) => (
                            <motion.div
                                key={std.id}
                                className="standard-item-card"
                                variants={fadeInUp}
                                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                            >
                                <div className="standard-num">0{std.id}</div>
                                <div className="standard-body">
                                    <h3 className="standard-title">{std.title}</h3>
                                    <p className="standard-desc">{std.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

/* ── 5. Market Presence with Real Product Photos ── */
const MarketPresence = () => {
    const marketData = [
        {
            id: 1,
            title: 'Agricultural Communities',
            badge: 'Agriculture & Farming',
            image: '/photos/mulch-films.png',
            description: 'Agricultural mulch films, UV grow bags, nursery bags, and irrigation delivery pipes designed to retain moisture, suppress weeds, and promote healthy crop yield.'
        },
        {
            id: 2,
            title: 'Packaging & Industrial Clients',
            badge: 'Industrial Packaging',
            image: '/photos/shrink-films.webp',
            description: 'Heavy-duty LD shrink films, woven PP bags, and construction plastic sheets for secure pallet unitization, weather shielding, and concrete curing.'
        },
        {
            id: 3,
            title: 'Retailers & Wholesalers',
            badge: 'Retail & Commercial',
            image: '/photos/agricultural-printed-bags.png',
            description: 'Polythene carry bags, shopping bags, and transparent LD pouches tailored for grocery stores, supermarkets, retail outlets, and wholesale mandis.'
        },
        {
            id: 4,
            title: 'Municipal & Sanitation Services',
            badge: 'Sanitation & Hygiene',
            image: '/photos/garbage-bags.webp',
            description: 'Leak-proof, tear-resistant garbage bags for hygienic waste management in homes, healthcare facilities, commercial offices, and municipal sanitation.'
        }
    ];

    return (
        <section className="about-markets-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <span className="section-eyebrow">Who We Supply</span>
                    <h2 className="section-title">Market Presence Across Nepal</h2>
                    <p className="section-subtitle">
                        Through quality and trust, SHREE SHYAM POLYMERS PVT. LTD. has established a strong presence in vital sectors:
                    </p>
                </motion.div>

                <motion.div
                    className="markets-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={staggerContainer}
                >
                    {marketData.map((market) => (
                        <motion.div
                            key={market.id}
                            className="market-product-card"
                            variants={fadeInUp}
                            whileHover={{ y: -8, transition: { duration: 0.25 } }}
                        >
                            <div className="market-img-wrapper">
                                <img
                                    src={market.image}
                                    alt={market.title}
                                    className="market-img"
                                    loading="lazy"
                                />
                                <span className="market-badge">{market.badge}</span>
                            </div>
                            <div className="market-card-content">
                                <h3 className="market-title">{market.title}</h3>
                                <p className="market-desc">{market.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

/* ── 6. Core Values ── */
const CoreValues = () => {
    const valueIcons = {
        'Quality First': <FaShieldAlt />,
        'Customer Trust': <FaHandshake />,
        'Consistency': <FaCogs />,
        'Responsibility': <FaRecycle />
    };

    return (
        <section className="about-values-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <span className="section-eyebrow">Guiding Principles</span>
                    <h2 className="section-title">Our Core Values</h2>
                    <p className="section-subtitle">
                        Four foundational pillars that govern our manufacturing, client relations, and quality management.
                    </p>
                </motion.div>

                <motion.div
                    className="values-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={staggerContainer}
                >
                    {companyProfile.coreValues.map((val) => (
                        <motion.div
                            key={val.id}
                            className="value-card"
                            variants={fadeInUp}
                            whileHover={{ y: -8, transition: { duration: 0.25 } }}
                        >
                            <motion.div
                                className="value-icon-box"
                                whileHover={{ rotate: 8, scale: 1.1 }}
                            >
                                {valueIcons[val.title] || <FaShieldAlt />}
                            </motion.div>
                            <h3 className="value-title">{val.title}</h3>
                            <h4 className="value-tag">{val.description}</h4>
                            <p className="value-detail">{val.detail}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

/* ── 8. Commitment to Sustainability ── */
const SustainabilityCommitment = () => {
    return (
        <section className="about-sustainability-section">
            <div className="container">
                <motion.div
                    className="sustainability-box"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                >
                    <div className="sustainability-badge">
                        <FaRecycle /> Environmental Responsibility
                    </div>
                    <h2 className="sustainability-heading">
                        {companyProfile.sustainability.headline}
                    </h2>
                    <p className="sustainability-sub">
                        {companyProfile.sustainability.description}
                    </p>

                    <div className="sustainability-pillars">
                        {companyProfile.sustainability.points.map((pt, idx) => (
                            <motion.div
                                key={idx}
                                className="sustain-pillar-card"
                                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                            >
                                <FaCheckCircle className="sustain-check-icon" />
                                <span>{pt}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

/* ── 9. Journey Timeline ── */
const JourneyTimeline = () => {
    return (
        <section className="about-journey-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <span className="section-eyebrow">Two Decades of Excellence</span>
                    <h2 className="section-title">Our Manufacturing Journey</h2>
                    <p className="section-subtitle">
                        A steady journey of capacity expansion, equipment modernization, and long-term client trust since 2003.
                    </p>
                </motion.div>

                <motion.div
                    className="timeline-track"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={staggerContainer}
                >
                    {companyProfile.timeline.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            className="timeline-block"
                            variants={fadeInUp}
                        >
                            <div className="timeline-node">
                                <motion.span
                                    className="timeline-year-badge"
                                    whileHover={{ scale: 1.12 }}
                                >
                                    {item.year}
                                </motion.span>
                                {idx < companyProfile.timeline.length - 1 && <div className="timeline-connector" />}
                            </div>
                            <motion.div
                                className="timeline-card"
                                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                            >
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

/* ── 10. Direct Plant Contact & Catalog CTA ── */
const AboutCTA = () => {
    return (
        <section className="about-cta-section">
            <div className="container">
                <motion.div
                    className="about-cta-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <div className="cta-text">
                        <h2>Ready to Discuss Your Requirements?</h2>
                        <p>
                            Whether you need agricultural films, custom printed packaging, sanitation supplies, or bulk industrial plastics, our team in Bhairahawa is ready to provide reliable solutions and competitive pricing.
                        </p>
                        <div className="cta-quick-contacts">
                            <span><FaMapMarkerAlt /> Omsatiya-2, Padsari, Bhairahawa, Nepal</span>
                            <span><FaPhoneAlt /> 071 421042</span>
                            <span><FaEnvelope /> shyampolynepal@gmail.com</span>
                        </div>
                    </div>
                    <div className="cta-actions">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                            <Link to="/products" className="btn btn-primary">
                                Explore Products <FaArrowRight />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                            <Link to="/contact" className="btn btn-secondary">
                                Contact Factory
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
