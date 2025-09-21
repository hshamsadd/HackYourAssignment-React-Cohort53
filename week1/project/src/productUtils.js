// It normalize category strings (it removes "FAKE: " and lowercases)
export function normalizeCategory(value) {
  if (!value) return "";
  return value.startsWith("FAKE: ")
    ? value.slice(6).trim().toLowerCase()
    : value.trim().toLowerCase();
}

// It filter products by selected category
export function filterProductsByCategory(products, selectedCategory) {
  if (!selectedCategory) return [];
  const normalizedSelected = normalizeCategory(selectedCategory);

  return products.filter(
    (product) => normalizeCategory(product.category) === normalizedSelected
  );
}
