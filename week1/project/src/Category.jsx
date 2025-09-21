function Category({ items, activeCategory, onItemClick }) {
  return (
    <div className="category-renderer">
      {items.map((item) => (
        <div
          key={item}
          className={`category-items ${
            item === activeCategory ? "active" : ""
          }`}
          onClick={() => onItemClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Category;
