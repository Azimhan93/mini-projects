import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";

export default function Products() {
  return (
    <>
      <h2>🛍 Products</h2>
      <ul>
        {PRODUCTS.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>
              {p.name} — ${p.price}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}