import { Link, useSearchParams } from "react-router-dom";
import useCategory from "../hooks/useCategory.js";
import HeartButton from "../components/HeartButton.jsx";

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "";
  const { products: data, loading } = useCategory(activeCategory);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid">
      {data.map((product) => (
        <div key={product.id} className="card">
          <img
            src={product.image}
            alt={product.title}
            className="product--image"
          />
          <Link to={`/product/${product.id}`}>
            <h3>{product.title}</h3>
          </Link>
          <p>${product.price}</p>
          <HeartButton product={product} />
        </div>
      ))}
    </div>
  );
}
