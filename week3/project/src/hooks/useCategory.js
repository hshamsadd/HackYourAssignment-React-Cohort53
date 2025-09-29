import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function useCategory(activeCategory) {
  const [categories, setCategories] = useState([]);

  // Fetch categories once
  const { data: categoriesData } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  // Fetch products when category changes
  const productsUrl = activeCategory
    ? `https://fakestoreapi.com/products/category/${encodeURIComponent(
        activeCategory
      )}`
    : "https://fakestoreapi.com/products";

  const { data: products, loading, error } = useFetch(productsUrl);

  useEffect(() => {
    if (categoriesData) {
      setCategories(categoriesData);
    }
  }, [categoriesData]);

  return { categories, products: products || [], loading, error };
}
