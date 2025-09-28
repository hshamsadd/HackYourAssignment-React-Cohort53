import { useState } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const { categories, products, loading, error } = useCategory(activeCategory);

  return (
    <div>
      <h1>Products</h1>

      {/* categories */}
      <div className="category-renderer">
        <div
          className={`category-items ${
            activeCategory === null ? "active" : ""
          }`}
          onClick={() => setActiveCategory(null)}
        >
          All
        </div>
        {categories.map((cat) => (
          <div
            key={cat}
            className={`category-items ${
              activeCategory === cat ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* loading and error */}
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}

      {/* products */}
      <ul className="products">
        {products.map((p) => (
          <li className="products--item" key={p.id}>
            <Link to={`/product/${p.id}`}>
              <div className="product">
                <img className="product--image" src={p.image} alt={p.title} />
                <span className="product--title" title={p.title}>
                  {p.title}
                </span>
                <span className="product--price">{p.price} €</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
