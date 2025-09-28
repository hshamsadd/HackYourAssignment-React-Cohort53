import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

function ProductDetail() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);

  if (loading)
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p>Loading product...</p>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <img src={product.image} alt={product.title} width={200} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price} €</p>
    </div>
  );
}

export default ProductDetail;
