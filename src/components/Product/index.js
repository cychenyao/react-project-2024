function Product({ product }) {
  return (
    <div>
      {product.name}: ￥{product.price}
    </div>
  );
}

export default Product;
