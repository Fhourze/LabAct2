// Product.js

import React from "react";

const Product = (props) => {
  const { brand, productName, price, imageUrl } = props;

  return (
    <div className="product-container">
      <img src={imageUrl} alt={productName} className="product-image" />
      <div className="brand" style={{ color: "red" }}>
        {brand}
      </div>
      <div className="product-name" style={{ color: "black", fontSize: "1em" }}>
        {productName}
      </div>
      <div className="price" style={{ color: "red" }}>
        {price}
      </div>
    </div>
  );
};

export default Product;
