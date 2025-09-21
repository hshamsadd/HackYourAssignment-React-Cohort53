function Product({ items }) {
  return (
    <ul className="products">
      {items.map((item) => (
        <li className="products--item" key={item.id}>
          <div className="product">
            <img className="product--image" src={item.image} />
            <span className="product--title" title={item.title}>
              {item.title}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Product;
