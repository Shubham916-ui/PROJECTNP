import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProductCard = ({ badge, image, title, description, link = '/products' }) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <div
            ref={ref}
            className="product-card"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
        >
            {badge && <div className="product-badge">{badge}</div>}
            <div className="product-image">
                <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="product-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={link} className="product-link">Learn More →</Link>
            </div>
        </div>
    );
};

export default ProductCard;
