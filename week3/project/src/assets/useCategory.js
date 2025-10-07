import { useEffect, useState } from "react";

export default function useCategory(activeCategory) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch categories once
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then(setCategories)
      .catch((err) => setError(err.message));
  }, []);

  // fetch products whenever activeCategory changes or on initial load
  useEffect(() => {
    setLoading(true);
    const url = activeCategory
      ? `https://fakestoreapi.com/products/category/${activeCategory}`
      : "https://fakestoreapi.com/products";

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [activeCategory]);

  return { categories, products, loading, error };
}
