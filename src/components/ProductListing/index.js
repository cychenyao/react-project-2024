import { useMemo } from "react";
import Product from "../Product";
import "./style.css";

function ProductListing({ products }) {
  const totalPrice = useMemo(() => {
    console.log("计算总价");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <div className="product_total">总计: ￥{totalPrice}</div>
    </div>
  );
}

export default ProductListing;
