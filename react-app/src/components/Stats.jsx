import { useRef, useEffect, useState } from 'react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { stats } from '../data/stats';

const Stats = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartAnimation(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <section className="stats" ref={ref}>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat) => (
                        <StatItem key={stat.id} {...stat} start={startAnimation} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StatItem = ({ number, label, suffix = '', start }) => {
    const count = useAnimatedCounter(number, 2000, start);

    return (
        <div className="stat-item">
            <div className="stat-number">
                {count}{suffix && <span className="stat-unit">{suffix}</span>}
            </div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

export default Stats;
