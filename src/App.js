import { useState } from "react";
import "./App.css";
import ProductListing from "./components/ProductListing";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "苹果", price: 1 },
    { id: 2, name: "香蕉", price: 5 },
    { id: 3, name: "菠萝", price: 10 },
  ]);

  const [isDark, setIsDark] = useState(true);

  function addProduct() {
    const newProduct = {
      id: Math.random(),
      name: `产品 ${products.length + 1}`,
      price: Math.floor(Math.random() * 10) + 1,
    };

    setProducts([...products, newProduct]);
  }

  return (
    <main className={isDark ? "container" : "container light"}>
      <div>
        <h1>产品列表</h1>
        <ProductListing products={products} />
        <button onClick={addProduct}>添加产品</button>
        <label htmlFor="toggleTheme">
          改变主题{" "}
          <input
            id="toggleTheme"
            type="checkbox"
            checked={isDark}
            value={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
          />
        </label>
      </div>
    </main>
  );
}
