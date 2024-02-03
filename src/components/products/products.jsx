import React, { useState } from "react";
import "./products.css";
import ProductData from "../../products.json";

const Products = (props) => {
  return (
    <>
      <div className="hero-main-1">
        <div className="product-card-group-1">
          {props.name == "all" ? <>
          {ProductData.products
            .map((product) => {
              return (
                <div class="product-card-1">
                  <img src={product.imageLink} alt="Card 1" />
                  <div class="card-content-1">
                    <div className="product-card-category-1">
                      {product.category}
                    </div>
                    <div className="product-card-item-1">
                      {product.productName}
                    </div>
                    <div className="product-card-price-1">
                      Rs. {product.price}.00
                    </div>
                    <div className="product-card-button-1">Buy Now</div>
                  </div>
                </div>
              );
            })}</> : <>
          {ProductData.products
            .filter((item) => item.categorySlug == props.name)
            .map((product) => {
              return (
                <div class="product-card-1">
                  <img src={product.imageLink} alt="Card 1" />
                  <div class="card-content-1">
                    <div className="product-card-category-1">
                      {product.category}
                    </div>
                    <div className="product-card-item-1">
                      {product.productName}
                    </div>
                    <div className="product-card-price-1">
                      Rs. {product.price}.00
                    </div>
                    <div className="product-card-button-1">Buy Now</div>
                  </div>
                </div>
              );
            })}</>}
         
        </div>
      </div>
    </>
  );
};

export default Products;
