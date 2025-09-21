import { useState } from "react";
import "./App.css";
import data from "./fake-data/all-categories.js";
import allProducts from "./fake-data/all-products.js";
import Category from "./Category.jsx";
import Product from "./Product.jsx";
import { filterProductsByCategory } from "./productUtils.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  const filteredProducts = filterProductsByCategory(
    allProducts,
    selectedCategory
  );

  return (
    <>
      <h1>Products</h1>
      <Category
        items={data}
        activeCategory={selectedCategory}
        onItemClick={handleCategoryClick}
      />
      <Product items={filteredProducts} />
    </>
  );
}

export default App;
