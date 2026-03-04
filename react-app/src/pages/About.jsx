import { useState } from 'react';
import { timeline } from '../data/timeline';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
    FaRecycle,
    FaSolarPanel,
    FaChevronLeft,
    FaChevronRight,
    FaQuoteLeft
} from 'react-icons/fa';

/* ── Leadership data ── */
const leaders = [
    {
        id: 1,
        name: 'Rajesh Sharma',
        role: 'CEO & Founder',
        quote: '"Quality is not a choice, it is our identity."',
        initials: 'RS',
        color: '#FF6B35'
    },
    {
        id: 2,
        name: 'Anita Gupta',
        role: 'Head of Ops',
        quote: '"Efficiency drives sustainability."',
        initials: 'AG',
        color: '#FFB800'
    },
    {
        id: 3,
        name: 'Mohan Thapa',
        role: 'Head of R&D',
        quote: '"Innovation never stops at SSPL."',
        initials: 'MT',
        color: '#D94800'
    }
];

/* ── Certification data ── */
const certs = [
    { id: 1, label: 'ISO\n9001:2015', icon: '📋' },
    { id: 2, label: 'Nepal Quality\nStandard', icon: '✔️' }
];

/* ══════════════════════════════
   MAIN COMPONENT
══════════════════════════════ */
const About = () => {
    return (
        <div className="about-page">
            {/* 1. Hero Banner */}
            <AboutHero />

            {/* 2. Story Intro */}
            <StoryIntro />

            {/* 3. Our Journey Timeline */}
            <OurJourney />

            {/* 4. Sustainable Growth */}
            <SustainableGrowth />

            {/* 5. Leadership */}
            <Leadership />

            {/* 6. Certifications */}
            <Certifications />
        </div>
    );
};

/* ── 1. Hero Banner ── */
const AboutHero = () => (
    <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
            <span className="about-hero-badge">🏭 Est. 2003 · Bhairahawa, Nepal</span>
            <h1 className="about-hero-title">
                Manufacturing<br />
                <span className="about-hero-accent">Excellence</span>
            </h1>
            <p className="about-hero-sub">Leading polymer innovation since 2003.</p>
        </div>
    </section>
);

/* ── 2. Story Intro ── */
const StoryIntro = () => {
    const [ref, isVisible] = useScrollAnimation();
    return (
        <section
            ref={ref}
            className="about-story"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}
        >
            <p>
                At{' '}
                <span className="about-story-brand">Shree Shyam Polymers</span>, we don't just
                manufacture plastic; we craft solutions. Our commitment to quality and
                consistency drives every pellet we produce.
            </p>
        </section>
    );
};

/* ── 3. Our Journey ── */
const OurJourney = () => {
    const [hRef, hVisible] = useScrollAnimation();
    return (
        <section className="about-journey">
            <div
                ref={hRef}
                className="about-section-header"
                style={{ opacity: hVisible ? 1 : 0, transform: hVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.5s ease' }}
            >
                <span className="about-section-icon">🕐</span>
                <h2 className="about-section-title">Our Journey</h2>
            </div>

            <div className="about-timeline">
                {timeline.map((item, idx) => (
                    <JourneyItem key={item.id} {...item} index={idx} />
                ))}
            </div>
        </section>
    );
};

const JourneyItem = ({ year, title, description, index }) => {
    const [ref, isVisible] = useScrollAnimation();
    return (
        <div
            ref={ref}
            className="journey-item"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: `all 0.55s ease ${index * 0.12}s`
            }}
        >
            <div className="journey-dot-col">
                <div className="journey-dot" />
                {index < timeline.length - 1 && <div className="journey-line" />}
            </div>
            <div className="journey-content">
                <span className="journey-year">{year}</span>
                <h4 className="journey-title">{title}</h4>
                <p className="journey-desc">{description}</p>
            </div>
        </div>
    );
};

/* ── 4. Sustainable Growth ── */
const SustainableGrowth = () => {
    const [ref, isVisible] = useScrollAnimation();
    return (
        <section
            ref={ref}
            className="about-sustainable"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}
        >
            <div className="about-section-header">
                <span className="about-section-icon">🌿</span>
                <h2 className="about-section-title">Sustainable Growth</h2>
            </div>
            <p className="about-sustainable-desc">
                We believe in a greener future. Our manufacturing processes are optimised to
                minimise carbon footprint.
            </p>
            <div className="about-sustain-cards">
                <SustainCard
                    icon={<FaRecycle />}
                    label="Zero Waste"
                    sublabel="Initiative"
                    color="#4CAF50"
                    bg="rgba(76,175,80,0.12)"
                />
                <SustainCard
                    icon={<FaSolarPanel />}
                    label="Solar Power"
                    sublabel="100% Green Energy"
                    color="#FFB800"
                    bg="rgba(255,184,0,0.12)"
                />
            </div>
        </section>
    );
};

const SustainCard = ({ icon, label, sublabel, color, bg }) => (
    <div className="sustain-card" style={{ background: bg }}>
        <span className="sustain-icon" style={{ color }}>{icon}</span>
        <div>
            <div className="sustain-label">{label}</div>
            <div className="sustain-sub">{sublabel}</div>
        </div>
    </div>
);

/* ── 5. Leadership ── */
const Leadership = () => {
    const [idx, setIdx] = useState(0);
    const [ref, isVisible] = useScrollAnimation();
    const [sliding, setSliding] = useState(false);
    const [dir, setDir] = useState('right');

    const slide = (next) => {
        if (sliding) return;
        setDir(next > idx ? 'right' : 'left');
        setSliding(true);
        setTimeout(() => {
            setIdx(next);
            setSliding(false);
        }, 300);
    };

    const prev = () => slide((idx - 1 + leaders.length) % leaders.length);
    const next = () => slide((idx + 1) % leaders.length);

    const leader = leaders[idx];

    return (
        <section
            ref={ref}
            className="about-leadership"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}
        >
            <div className="about-leadership-header">
                <h2 className="about-section-title" style={{ margin: 0 }}>Leadership</h2>
                <div className="leadership-swipe">
                    <button className="swipe-btn" onClick={prev} aria-label="Previous">
                        <FaChevronLeft />
                    </button>
                    <button className="swipe-btn" onClick={next} aria-label="Next">
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            <div className="leadership-carousel">
                <div
                    className={`leader-card ${sliding ? `slide-out-${dir}` : 'slide-in'}`}
                    key={leader.id}
                >
                    <div className="leader-avatar" style={{ background: `linear-gradient(135deg, ${leader.color}88, ${leader.color})` }}>
                        <span className="leader-initials">{leader.initials}</span>
                    </div>
                    <div className="leader-info">
                        <div className="leader-name">{leader.name}</div>
                        <div className="leader-role">{leader.role}</div>
                        <div className="leader-quote">
                            <FaQuoteLeft className="quote-icon" />
                            {leader.quote}
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="leader-dots">
                    {leaders.map((_, i) => (
                        <button
                            key={i}
                            className={`leader-dot ${i === idx ? 'active' : ''}`}
                            onClick={() => slide(i)}
                            aria-label={`Leader ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ── 6. Certifications ── */
const Certifications = () => {
    const [ref, isVisible] = useScrollAnimation();
    return (
        <section
            ref={ref}
            className="about-certifications"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}
        >
            <h2 className="about-section-title">Certifications</h2>
            <div className="cert-grid">
                {certs.map(c => (
                    <div key={c.id} className="cert-card">
                        <div className="cert-icon">{c.icon}</div>
                        <div className="cert-label">{c.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
