import { useState } from 'react';
import { products } from '../data/products';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaPrint, FaCheck, FaBars } from 'react-icons/fa';
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
        </div>
    );
};

const ProductCard = ({ id, name, category, image, description }) => {
    return (
        <div className="catalog-card">
            <div className="card-image-container">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to={`/product/${id}`} className="view-details-btn">View Details</Link>
            </div>
        </div>
    );
};

export default Products;
