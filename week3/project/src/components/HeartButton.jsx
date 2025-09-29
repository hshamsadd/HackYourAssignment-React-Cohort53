import { useFavorites } from "../contexts/FavoritesContext.jsx";
import regular from "../assets/heart-regular.svg";
import solid from "../assets/heart-solid.svg";

export default function HeartButton({ product }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <button className="heart-btn" onClick={() => toggleFavorite(product)}>
      <img src={isFavorite ? solid : regular} alt="favorite" />
    </button>
  );
}
