import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import HeartButton from "../components/HeartButton.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Product not found</p>;

  return (
    <div className="detail">
      <img src={data.image} alt={data.title} className="product--image" />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
      <HeartButton product={data} />
    </div>
  );
}
