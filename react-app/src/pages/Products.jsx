import { useState } from 'react';
import { products } from '../data/products';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaPrint, FaCheck, FaBars, FaHome, FaThLarge, FaClipboardList, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className="product-catalog-page">
            {/* Main Content */}
            <div className="container catalog-container">
                <div className="catalog-status">
                    <h2>POPULAR SOLUTIONS</h2>
                    <span className="item-count">{products.length} Items</span>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>

            {/* Bottom Navigation for Mobile */}
            <div className="mobile-bottom-nav">
                <Link to="/" className="nav-item">
                    <FaHome />
                    <span>Home</span>
                </Link>
                <Link to="/products" className="nav-item active">
                    <FaThLarge />
                    <span>Catalog</span>
                </Link>
                <div className="nav-item">
                    <FaClipboardList />
                    <span>Inquiry</span>
                </div>
                <Link to="/contact" className="nav-item">
                    <FaEnvelope />
                    <span>Contact</span>
                </Link>
            </div>
        </div>
    );
};

const ProductCard = ({ name, category, image, description }) => {
    return (
        <div className="catalog-card">
            <div className="card-image-container">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <h3>{name}</h3>
                <p>{description}</p>
                <button className="view-details-btn">View Details</button>
            </div>
        </div>
    );
};

export default Products;
