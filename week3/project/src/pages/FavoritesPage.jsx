import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext.jsx";
import HeartButton from "../components/HeartButton.jsx";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0)
    return <p>You haven't chosen any favourites yet!</p>;

  return (
    <div className="grid">
      {favorites.map((product) => (
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
