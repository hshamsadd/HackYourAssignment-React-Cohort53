import { useMemo } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

export default function CategoryBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "";

  const { data: categoriesData, loading } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  const items = useMemo(() => {
    const categories = Array.isArray(categoriesData) ? categoriesData : [];
    return ["All", ...categories];
  }, [categoriesData]);

  const onSelect = (cat) => {
    const isAll = cat === "All";

    // Build the desired search string
    const q = new URLSearchParams();
    if (!isAll) q.set("category", cat);
    const search = q.toString();

    if (location.pathname !== "/") {
      // If we're not on the products page, navigate there with the search
      navigate({ pathname: "/", search: search ? `?${search}` : "" });
    } else {
      // Already on products page, just update the search params
      if (isAll) setSearchParams({});
      else setSearchParams({ category: cat });
    }
  };

  if (loading) return null;

  return (
    <div className="category-renderer">
      {items.map((cat) => {
        const key = cat === "All" ? "all" : cat;
        const isActive =
          cat === "All" ? !activeCategory : activeCategory === cat;
        const label =
          cat === "All" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1);
        return (
          <button
            key={key}
            className={`category-items${isActive ? " active" : ""}`}
            onClick={() => onSelect(cat)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
