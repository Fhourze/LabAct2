import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Header from "./Header.js";
import ContentArea from "./ContentArea.js";
import Product from "./Product";

function App() {
  return (
    <div className="container">
      <Header />
      <ContentArea />
      <div className="product-container-main">
        <Product
          brand="Megabox"
          productName="Megabox Dish Drainer MG323 – White"
          price="P599"
          imageUrl="https://www.acehardware.ph/cdn/shop/products/13a-jpg_60257_1024x1024.jpg?v=1630204240"
        />
        <Product
          brand="Example Brand"
          productName="Orocan Kitchen Queen 8722M Dish Drainer (White)"
          price="P1,647"
          imageUrl="https://www.acehardware.ph/cdn/shop/products/Orocan8722M_1024x1024.png?v=1631512754"
        />
      </div>
    </div>
  );
}

export default App;
