import { useState } from "react";

export default function App() {
  const products = [
    { id: 1, name: "Ipad",  price: 1000 },
    { id: 2, name: "Iphone 6s",  price: 600  },
    { id: 3, name: "Iphone XR", price: 750  },
    { id: 4, name: "Ipad Pro",  price: 1200 },
    { id: 5, name: "TV Samsung E340",  price: 715  },
    { id: 6, name: "Apple airpods", price: 550  },
  ];


  const [cart, setCart] = useState({});

  function addToCart(id) {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1
    }));
  }

  function clearCart() {
    setCart({});
  }

  const cartCount = Object.values(cart).reduce((sum, q) => sum + q, 0);

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = products.find(p => p.id === Number(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20, maxWidth: 560 }}>
      <h1>🛒 Cart</h1>

      <div style={{ 
        display: "flex", gap: 16, alignItems: "center",
        padding: 12, border: "1px solid #eee", borderRadius: 10, marginBottom: 16 
      }}>
        <span><b>Items:</b> {cartCount}</span>
        <span><b>Total:</b> ${cartTotal}</span>
        <button onClick={clearCart} disabled={cartCount === 0}>
          Clear cart
        </button>
      </div>

      <h2>📋 Product list</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map(item => (
          <li key={item.id} style={{ 
            display: "flex", alignItems: "center", gap: 12,
            padding: "10px 0", borderBottom: "1px solid #eee"
          }}>
            <strong style={{ width: 180 }}>{item.name}</strong>
            <span style={{ width: 90 }}>${item.price}</span>

            <button onClick={() => addToCart(item.id)}>
              Add to cart
            </button>

            {!!cart[item.id] && (
              <span style={{ marginLeft: "auto", opacity: 0.75 }}>
                In cart: {cart[item.id]}
              </span>
            )}
          </li>
        ))}
      </ul>

      {cartCount === 0 && (
        <p style={{ marginTop: 12, opacity: 0.7 }}>
          The cart is empty 🙃 Click "Add to cart" on a product.
        </p>
      )}
    </div>
  );
}
