import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProductCard = ({ badge, image, title, name, description, link, id }) => {
    const ref = useScrollAnimation();
    const productTitle = title || name;
    const productLink = link || (id ? `/product/${id}` : '/products');

    return (
        <div
            ref={ref}
            className="product-card scroll-animate translate-y"
        >
            {badge && <div className="product-badge">{badge}</div>}
            <div className="product-image">
                <img src={image} alt={productTitle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="product-info">
                <h3>{productTitle}</h3>
                <p>{description}</p>
                <Link to={productLink} className="product-link">Learn More →</Link>
            </div>
        </div>
    );
};

export default ProductCard;
