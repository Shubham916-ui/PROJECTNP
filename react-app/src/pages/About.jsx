import { timeline } from '../data/timeline';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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

export default About;

