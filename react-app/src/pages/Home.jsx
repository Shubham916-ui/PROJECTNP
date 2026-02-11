import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/categories.jsx';
import { featuredProducts } from '../data/products';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaRecycle, FaSeedling, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa';
import logo from '../assets/Icons/logo-new-2024.png';

const Home = () => {
    return (
        <>
            <Hero />

            {/* Product Categories */}
            <section className="categories">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Product Categories</h2>
                        <p className="section-subtitle">Comprehensive plastic solutions for diverse industries</p>
                    </div>
                    <div className="category-grid">
                        {categories.map((category) => (
                            <CategoryCard key={category.id} {...category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <Stats />

            {/* Featured Products */}
            <section className="featured-products">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Products</h2>
                        <p className="section-subtitle">Premium quality products trusted across Nepal</p>
                    </div>
                    <div className="products-carousel">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Sustainability Commitment */}
            <section className="sustainability">
                <div className="container">
                    <div className="sustainability-content">
                        <div className="sustainability-text">
                            <h2>Our Commitment to Sustainability</h2>
                            <p>At SHREE SHYAM POLYMERS, we believe in responsible manufacturing. We actively promote recycling awareness, create durable products that reduce waste, and balance industrial growth with environmental responsibility.</p>
                            <ul className="sustainability-list">
                                <li><FaRecycle className="list-icon" /> Promoting responsible plastic usage</li>
                                <li><FaSeedling className="list-icon" /> Supporting recycling initiatives</li>
                                <li><FaShieldAlt className="list-icon" /> Manufacturing durable, long-lasting products</li>
                                <li><FaGlobeAmericas className="list-icon" /> Committed to environmental responsibility</li>
                            </ul>
                        </div>
                        <div className="sustainability-visual">
                            <div className="circle-graphic">
                                <div className="circle circle-outer"></div>
                                <div className="circle circle-middle"></div>
                                <div className="circle circle-inner"></div>
                                <img src={logo} alt="Shree Shyam Polymers" className="sustainability-logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Get Started?</h2>
                        <p>Contact us today to discuss your plastic product requirements</p>
                        <Link to="/contact" className="btn btn-primary btn-large">Get in Touch</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

const CategoryCard = ({ icon, name, description }) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <Link to="/products" className="category-card-link">
            <div
                ref={ref}
                className="category-card"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease'
                }}
            >
                <div className="category-icon">{icon}</div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default Home;
