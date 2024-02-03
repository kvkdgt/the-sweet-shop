import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../components/products/products";

const Product = () => {
  let { name } = useParams();
  return <div style={{ marginTop: "100px" }}>
    <Products name={name} />
  </div>;
};

export default Product;
