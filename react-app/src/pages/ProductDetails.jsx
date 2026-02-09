import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { FaArrowLeft, FaCheck, FaFilePdf } from 'react-icons/fa';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="product-details-page error-page">
                <div className="container">
                    <h2>Product Not Found</h2>
                    <Link to="/products" className="back-btn">Back to Catalog</Link>
                </div>
            </div>
        );
    }

    // Mock Technical Specs based on category (since not in data)
    const getSpecs = (category) => {
        switch (category) {
            case 'Agriculture':
                return [
                    { label: 'Material', value: 'High Density Polyethylene' },
                    { label: 'Thickness', value: '25 - 200 Microns' },
                    { label: 'Width', value: 'Up to 5 Meters' },
                    { label: 'UV Stability', value: 'Yes (3-5 Years)' }
                ];
            case 'Industrial':
                return [
                    { label: 'Material', value: 'PE-100 / PE-80' },
                    { label: 'Pressure Rating', value: 'PN 6 to PN 16' },
                    { label: 'Standard', value: 'ISO 4427 / DIN 8074' },
                    { label: 'Temperature', value: '-40°C to 60°C' }
                ];
            default:
                return [
                    { label: 'Material', value: 'Virgin Plastic' },
                    { label: 'Grade', value: 'Food Grade Available' },
                    { label: 'Recyclability', value: '100% Recyclable' },
                    { label: 'Customization', value: 'Size & Color on Request' }
                ];
        }
    };

    const specs = getSpecs(product.category);

    return (
        <div className="product-details-page">
            <div className="container">
                {/* Back Button */}
                <Link to="/products" className="details-back-link">
                    <FaArrowLeft /> Back to Catalog
                </Link>

                {/* Product Image Section */}
                <div className="details-image-container">
                    <img src={product.image} alt={product.name} />
                    <div className="image-dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>

                {/* Product Info */}
                <div className="details-content">
                    <div className="details-tags">
                        <span className="tag-pill">{product.category.toUpperCase()}</span>
                        {product.badge && <span className="tag-pill secondary">{product.badge.toUpperCase()}</span>}
                    </div>

                    <h1 className="details-title">{product.name}</h1>

                    <p className="details-description">
                        {product.description}
                        <br /><br />
                        High-quality manufacturing ensures superior performance in all applications. Designed to meet industry standards for durability and efficiency.
                    </p>

                    <div className="details-features">
                        <h3>KEY FEATURES</h3>
                        <ul>
                            {product.features.map((feature, idx) => (
                                <li key={idx}>
                                    <FaCheck className="feature-check-icon" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="details-specs">
                        <h3>TECHNICAL SPECIFICATIONS</h3>
                        <div className="specs-table">
                            {specs.map((spec, idx) => (
                                <div className="spec-row" key={idx}>
                                    <span className="spec-label">{spec.label}</span>
                                    <span className="spec-value">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Floating CTA */}
            <div className="details-cta-bar">
                <Link to="/contact" className="request-quote-btn">
                    <FaFilePdf /> Request a Quote
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;
