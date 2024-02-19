import React from "react";

const Product = (props) => {
  const { brand, productName, price, imageUrl, quantity } = props;

  const isOutOfStock = quantity < 1;

  return (
    <div className={`product-container ${isOutOfStock ? "out-of-stock" : ""}`}>
      <img
        src={imageUrl}
        alt={productName}
        className={`product-image ${isOutOfStock ? "greyscale" : ""}`}
      />
      {isOutOfStock && <div className="out-of-stock-label">Out of Stock</div>}
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
