import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Products from "./pages/Product.js";
import ProductDetail from "./pages/ProductDetail.js";
import NotFound from "./pages/NotFound.js";

const linkStyle = ({ isActive }) => ({
  padding: "8px 10px",
  textDecoration: "none",
  color: isActive ? "#fff" : "#333",
  background: isActive ? "#111" : "transparent",
  borderRadius: 8
});

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 16 }}>
      <nav style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <NavLink to="/" style={linkStyle} end>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/products" style={linkStyle}>Products</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}