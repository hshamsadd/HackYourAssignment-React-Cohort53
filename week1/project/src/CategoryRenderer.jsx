function CategoryRenderer({ items }) {
  return (
    <div className="category-renderer">
      {items.map((item) => (
        <div className="category-items" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default CategoryRenderer;
