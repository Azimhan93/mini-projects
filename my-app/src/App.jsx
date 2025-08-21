import { useState } from "react";

export default function App() {
  const [apple, setApple] = useState(0);
  const [orange, setOrange] = useState(0);

  const priceApple = 18;
  const priceOrange = 32;

  const total = priceApple * apple + priceOrange * orange;


  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>🧺 Products</h1>

      {/* Apple */}
      <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, width: 320, marginBottom: 20 }}>
        <h2>Apple</h2>
        <p>Price: {priceApple} $</p>

        <div>
          <button onClick={() => setApple(q => Math.max(0, q - 1))} disabled={apple === 0}>−</button>
          <span style={{ margin: "0 12px" }}>{apple}</span>
          <button onClick={() => setApple(q => Math.min(10, q + 1))} disabled={apple === 10}>+</button>
        </div>

        <p style={{ marginTop: 12 }}>Total: {priceApple * apple} $</p>
      </div>

      {/* Orange */}
      <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, width: 320, marginBottom: 20 }}>
        <h2>Orange</h2>
        <p>Price: {priceOrange} $</p>

        <button onClick={() => setOrange(q => Math.max(0, q - 1))} disabled={orange === 0}>−</button>
        <span style={{ margin: "0 24px" }}>{orange}</span>
        <button onClick={() => setOrange(q => Math.min(10, q + 1))} disabled={orange === 10}>+</button>
      </div>
    
      {/* Общая сумма */}
      <h2>💰 Общая сумма: {total} $</h2>

      <button onClick={() => { setApple(0); setOrange(0) }} disabled={apple === 0 && orange === 0}>Clear</button>

      
    </div>
  );
}
