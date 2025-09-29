import useFetch from "./useFetch";

export default function useProduct(id) {
  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  return { product, loading, error };
}
