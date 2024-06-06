// src/App.js
import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <h1>E-commerce Product List</h1>
      <Cart />
      <ProductList />
    </div>
  );
}

export default App;

