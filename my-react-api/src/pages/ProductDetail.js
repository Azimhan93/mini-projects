import { useParams, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();              
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/products")}>Back to products</button>
      </>
    );
  }

  return (
    <>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => navigate(-1)}>← Back</button>
        <button onClick={() => navigate("/products")}>All products</button>
      </div>
    </>
  );
}