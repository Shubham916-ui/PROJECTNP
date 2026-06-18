import { timeline } from '../data/timeline';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
    FaRecycle,
    FaSolarPanel
} from 'react-icons/fa';

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
    const ref = useScrollAnimation();
    return (
        <section
            ref={ref}
            className="about-story scroll-animate translate-y"
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
    const hRef = useScrollAnimation();
    return (
        <section className="about-journey">
            <div
                ref={hRef}
                className="about-section-header scroll-animate translate-y"
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
    const ref = useScrollAnimation();
    return (
        <div
            ref={ref}
            className="journey-item scroll-animate translate-x"
            style={{
                transitionDelay: `${index * 0.12}s`
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
    const ref = useScrollAnimation();
    return (
        <section
            ref={ref}
            className="about-sustainable scroll-animate translate-y"
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

export default About;
