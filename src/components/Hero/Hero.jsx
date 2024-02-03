import React, { useState } from "react";
import "./Hero.css";
import ProductData from "../../products.json";
const categories = [
  {
    id: 1,
    imgLink:
      "https://i.pinimg.com/564x/e6/20/35/e620353f5ba8188325b9ab58d16c8616.jpg",
    name: "Dryfruit Sweets",
    redirectLink: "#",
  },
  {
    id: 2,
    imgLink:
      "https://i.pinimg.com/564x/80/94/fc/8094fc04d22d470357f345d3ddda3171.jpg",
    name: "Pure Ghee Sweets",
    redirectLink: "#",
  },
  {
    id: 3,
    imgLink:
      "https://i.pinimg.com/564x/98/3a/e8/983ae84fe28972ce2016da5dbb27f7c9.jpg",
    name: "Bengali Sweets",
    redirectLink: "#",
  },
  {
    id: 4,
    imgLink:
      "https://i.pinimg.com/736x/a9/3d/77/a93d77d3e242262f2c919bf66aef5b39.jpg",
    name: "Mava Sweets",
    redirectLink: "#",
  },
  {
    id: 5,
    imgLink:
      "https://i.pinimg.com/564x/96/42/a3/9642a313f1bdbd51a1ea1738c2f47d88.jpg",
    name: "Namkeen",
    redirectLink: "#",
  },
  // Add more objects as needed
];

const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <div className="category-header">
          <h2 style={{ fontWeight: 500 }}>Our Varieties of taste</h2>
        </div>
        <div className="card-container">
          {categories.map((category) => (
            <div key={category.id} className="card">
              <img src={category.imgLink} alt={category.name} />
              <div className="card-content">
                <span className="category-name">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{}} className="category-header category-header-2">
          <h2 style={{ fontWeight: 500 }}>Our sweet trending items</h2>
          <span>View all</span>
        </div>
        <div className="product-card-group">
          {ProductData.products.slice(0, 5).map((product) => {
            return (
              <div class="product-card">
                <img src={product.imageLink} alt="Card 1" />
                <div class="card-content">
                  <div className="product-card-category">
                    {product.category}
                  </div>
                  <div className="product-card-item">{product.productName}</div>
                  <div className="product-card-price">
                    Rs. {product.price}.00
                  </div>
                  <div className="product-card-button">Buy Now</div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{}} className="category-header category-header-3">
          <h2 style={{ fontWeight: 500 }}>Our Bengali Sweet Collection</h2>
          <span>View all</span>
        </div>
        <div className="product-card-group">
          {ProductData.products.slice(0, 5).map((product) => {
            return (
              <div class="product-card">
                <img src={product.imageLink} alt="Card 1" />
                <div class="card-content">
                  {/* <div className="product-card-category">{product.category}</di v> */}
                  <div className="product-card-item">{product.productName}</div>
                  <div className="product-card-price">
                    Rs. {product.price}.00
                  </div>
                  <div className="product-card-button">Buy Now</div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{}} className="category-header category-header-3">
          <h2 style={{ fontWeight: 500 }}>Treditional Snacks</h2>
          <span>View all</span>
        </div>
        <div className="product-card-group">
          {ProductData.products.slice(0, 5).map((product) => {
            return (
              <div class="product-card">
                <img src={product.imageLink} alt="Card 1" />
                <div class="card-content">
                  {/* <div className="product-card-category">{product.category}</di v> */}
                  <div className="product-card-item">{product.productName}</div>
                  <div className="product-card-price">
                    Rs. {product.price}.00
                  </div>
                  <div className="product-card-button">Buy Now</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default Hero;
