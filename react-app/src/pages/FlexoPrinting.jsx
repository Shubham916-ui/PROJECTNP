import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPrint, FaCheckCircle, FaLeaf, FaBoxOpen, FaTags, FaBullseye, FaShippingFast, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const capabilities = [
    {
        icon: <FaBoxOpen />,
        title: 'Custom Brand Packaging',
        desc: 'Tailored solutions for product differentiation.',
    },
    {
        icon: <FaShippingFast />,
        title: 'High-Speed Production',
        desc: 'Efficient runs for timely delivery.',
    },
    {
        icon: <FaLeaf />,
        title: 'Eco-Friendly Inks',
        desc: 'Sustainable printing options.',
    },
];

const materials = [
    { name: 'LDPE Films', image: '/photos/ldpe-film-rolls.png', desc: 'Low-density polyethylene film rolls' },
    { name: 'HDPE Films', image: '/photos/hdpe-film-rolls.png', desc: 'High-density polyethylene sheets' },
    { name: 'PP Films', image: '/photos/pp-shrink-film.png', desc: 'Polypropylene shrink films' },
    { name: 'Polythene Bags', image: '/photos/polythene-bags.png', desc: 'Customizable polythene bags' },
    { name: 'Garbage Bags', image: '/photos/garbage-bags.png', desc: 'Branded garbage bags' },
    { name: 'Agri Bags', image: '/photos/agricultural-printed-bags.png', desc: 'Rice & agricultural bags' },
];

const whyPoints = [
    'Crisp, high-resolution graphics',
    'Consistent color accuracy',
    'Cost-effective for medium to high volume',
    'Fast turnaround times',
    'Logo, branding & product info printing',
    'Suitable for bulk packaging orders',
];

const galleryImages = [
    { src: '/photos/flexo-printing-closeup.png', label: 'Flexo Press in Action' },
    { src: '/photos/printed-packaging-1.png', label: 'Custom Brand Print' },
    { src: '/photos/printed-packaging-2.png', label: 'High-Res Label Print' },
    { src: '/photos/agricultural-printed-bags.png', label: 'Rice & Agri Bags' },
];

const FlexoPrinting = () => {
    const [materialIndex, setMaterialIndex] = useState(0);
    const visibleCount = 3;

    const prevMaterial = () => {
        setMaterialIndex(i => Math.max(0, i - 1));
    };
    const nextMaterial = () => {
        setMaterialIndex(i => Math.min(materials.length - visibleCount, i + 1));
    };

    const visibleMaterials = materials.slice(materialIndex, materialIndex + visibleCount);

    return (
        <div className="flexo-page">

            {/* ── HERO BANNER ── */}
            <section className="flexo-hero-banner">
                <img
                    src="/photos/flexo-hero-machine.png"
                    alt="Flexographic Printing Press"
                    className="flexo-hero-bg"
                />
                <div className="flexo-hero-overlay"></div>
                <div className="flexo-hero-content">
                    <div className="flexo-hero-badge">
                        <FaPrint /> Premium Service
                    </div>
                    <h1>Precision Printing.<br /><span>Vibrant Results.</span></h1>
                    <p>Advanced flexographic printing capabilities for superior branding on all plastic packaging.</p>
                    <div className="flexo-hero-btns">
                        <Link to="/contact" className="flexo-hero-btn-primary">Request a Quote</Link>
                        <a href="#flexo-capabilities" className="flexo-hero-btn-outline">Our Capabilities ↓</a>
                    </div>
                </div>
            </section>

            {/* ── CAPABILITIES ── */}
            <section className="flexo-capabilities-sec" id="flexo-capabilities">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Capabilities</h2>
                        <p className="section-subtitle">What makes our flexographic printing stand out</p>
                    </div>
                    <div className="category-grid">
                        {capabilities.map((cap, i) => (
                            <div className="category-card" key={i}>
                                <div className="category-icon">{cap.icon}</div>
                                <h3>{cap.title}</h3>
                                <p>{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MATERIALS CAROUSEL ── */}
            <section className="flexo-materials-sec">
                <div className="container">
                    <div className="flexo-materials-header">
                        <div>
                            <h2>Materials We Print On</h2>
                            <p>We print on a wide range of plastic packaging materials</p>
                        </div>
                        <div className="flexo-carousel-nav">
                            <button
                                className="flexo-nav-btn"
                                onClick={prevMaterial}
                                disabled={materialIndex === 0}
                                id="mat-prev"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                className="flexo-nav-btn"
                                onClick={nextMaterial}
                                disabled={materialIndex >= materials.length - visibleCount}
                                id="mat-next"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                    <div className="flexo-materials-grid">
                        {visibleMaterials.map((mat, i) => (
                            <div className="flexo-material-card" key={i}>
                                <img src={mat.image} alt={mat.name} className="flexo-material-img" />
                                <div className="flexo-material-label">
                                    <strong>{mat.name}</strong>
                                    <span>{mat.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Dots indicator */}
                    <div className="flexo-dots">
                        {Array.from({ length: materials.length - visibleCount + 1 }).map((_, i) => (
                            <span
                                key={i}
                                className={`flexo-dot ${i === materialIndex ? 'active' : ''}`}
                                onClick={() => setMaterialIndex(i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE + GALLERY ── */}
            <section className="flexo-why-sec">
                <div className="container">
                    <div className="flexo-why-layout">
                        {/* Left: Points */}
                        <div className="flexo-why-left">
                            <h2>Why Choose Our<br />Flexo Printing?</h2>
                            <ul className="flexo-why-list">
                                {whyPoints.map((pt, i) => (
                                    <li key={i}>
                                        <span className="flexo-why-dot"></span>
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Image mosaic */}
                        <div className="flexo-why-right">
                            <div className="flexo-mosaic">
                                <div className="flexo-mosaic-main">
                                    <img src="/photos/flexo-printing-closeup.png" alt="Flexo printing in action" />
                                </div>
                                <div className="flexo-mosaic-side">
                                    <div className="flexo-mosaic-side-img">
                                        <img src="/photos/printed-packaging-1.png" alt="Custom brand packaging" />
                                    </div>
                                    <div className="flexo-mosaic-side-img">
                                        <img src="/photos/printed-packaging-2.png" alt="High-res print" />
                                    </div>
                                    <div className="flexo-mosaic-side-img">
                                        <img src="/photos/agricultural-printed-bags.png" alt="Rice bags" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRINTED SAMPLES GALLERY ── */}
            <section className="flexo-samples-sec">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Printed Packaging Samples</h2>
                        <p className="section-subtitle">Real examples of our flexographic printing quality</p>
                    </div>
                    <div className="flexo-samples-grid">
                        {galleryImages.map((img, i) => (
                            <div className="flexo-sample-card" key={i}>
                                <img src={img.src} alt={img.label} />
                                <div className="flexo-sample-label">{img.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICE DETAILS SPLIT ── */}
            <section className="flexo-details-sec">
                <div className="container">
                    <div className="flexo-details-layout">
                        <div className="flexo-details-image">
                            <img src="/photos/flexo-printing-machine.png" alt="Flexo Printing Machine" />
                            <div className="flexo-details-badge">✨ Custom Branding Available</div>
                        </div>
                        <div className="flexo-details-text">
                            <div className="flexo-section-tag"><FaPrint /> Our Printing Service</div>
                            <h2>Custom Flexographic Printing on Plastic Packaging</h2>
                            <p>
                                We offer custom flexographic printing services on polythene bags, garbage bags,
                                packaging films, rice bags, and agricultural bags. Our flexo printing is ideal
                                for solid-color branding, logos, product names, and essential packaging information.
                            </p>
                            <p>
                                With in-house flexographic printing capability, your packaging becomes a powerful
                                marketing tool — every bag, film, or pouch can carry your brand identity clearly
                                and professionally.
                            </p>
                            <div className="flexo-detail-chips">
                                <span className="flexo-chip">Up to 4 Colors</span>
                                <span className="flexo-chip">Bulk Orders</span>
                                <span className="flexo-chip">MOQ Negotiable</span>
                                <span className="flexo-chip">Fast Delivery</span>
                            </div>
                            <Link to="/contact" className="btn-flexo-cta" id="flexo-details-cta">
                                <FaPrint /> Request Custom Printing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="flexo-final-cta">
                <div className="container">
                    <div className="flexo-cta-box">
                        <div className="flexo-cta-text">
                            <h2>Ready to elevate your packaging?<br />Get a Printing Quote Today.</h2>
                            <p>Contact us to discuss your custom printing requirements. We'll provide a free quote for your bulk order.</p>
                        </div>
                        <div className="flexo-cta-actions">
                            <Link to="/contact" className="flexo-cta-primary-btn" id="flexo-quote-btn">
                                Request Quote
                            </Link>
                            <Link to="/products" className="flexo-cta-sec-btn">
                                View Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlexoPrinting;
