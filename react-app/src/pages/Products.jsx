import { products } from '../data/products';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaPrint, FaCheck } from 'react-icons/fa';

const Products = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-gradient"></div>
                <div className="container">
                    <h1 className="page-title">Our Products</h1>
                    <p className="page-subtitle">Comprehensive Plastic Solutions for Every Need</p>
                </div>
            </section>

            {/* Products */}
            <section className="products-section">
                <div className="container">
                    {products.map((product, index) => (
                        <ProductDetail key={product.id} {...product} index={index} />
                    ))}
                </div>
            </section>

            {/* Flexographic Printing */}
            <section className="flexo-section">
                <div className="container">
                    <div className="flexo-content">
                        <div className="flexo-icon"><FaPrint /></div>
                        <h2 className="section-title">Flexographic Printing Services</h2>
                        <p>We offer custom flexographic printing on our plastic products, allowing you to add your brand logo, product information, and designs. Perfect for businesses looking to enhance their product packaging with professional branding.</p>
                        <div className="flexo-features">
                            <div className="flexo-feature">
                                <span className="feature-icon"><FaCheck /></span>
                                <span>Multi-color printing</span>
                            </div>
                            <div className="flexo-feature">
                                <span className="feature-icon"><FaCheck /></span>
                                <span>Custom designs</span>
                            </div>
                            <div className="flexo-feature">
                                <span className="feature-icon"><FaCheck /></span>
                                <span>High-quality output</span>
                            </div>
                            <div className="flexo-feature">
                                <span className="feature-icon"><FaCheck /></span>
                                <span>Bulk orders</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const ProductDetail = ({ id, name, badge, category, image, description, features, applications, index }) => {
    const [ref, isVisible] = useScrollAnimation();
    const isReverse = index % 2 !== 0;

    return (
        <div
            ref={ref}
            className="product-detail"
            id={name.toLowerCase().replace(/\s+/g, '-')}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
        >
            <div className={`product-detail-content ${isReverse ? 'reverse' : ''}`}>
                <div className="product-detail-text">
                    <div className="product-category-badge">{category}</div>
                    <h2>{name}</h2>
                    <p className="product-description">{description}</p>

                    <div className="product-features">
                        <h4>Key Features:</h4>
                        <ul>
                            {features.map((feature, idx) => (
                                <li key={idx}><span className="feature-check"><FaCheck /></span> {feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="product-applications">
                        <h4>Applications:</h4>
                        <p>{applications.join(', ')}</p>
                    </div>
                </div>
                <div className="product-detail-visual">
                    <div className="product-image-large">
                        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
