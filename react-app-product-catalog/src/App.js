import { useState, useEffect } from "react";

export default function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  

  const PER_PAGE = 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const clampedPage = Math.min(page, totalPages);
  const start = (clampedPage - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  useEffect(() => {
      setPage(1);
  }, [q]);

  return (
    <div style={{ padding: 20, maxWidth: 720 }}>
      <h1>📝 Product Catalog</h1>

      <label htmlFor="search" style={{ display: "block", marginBottom: 6 }}>
        Search by title or description
      </label>
      <input
        id="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search title or description..."
        style={{ marginBottom: 12, width: "100%", maxWidth: 420 }}
      />

      {loading && <p>⏳ Loading…</p>}
      {error && (
        <p role="alert" style={{ color: "crimson" }}>
          ⚠️ {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <p style={{ opacity: 0.7 }}>
            Found {filtered.length} of {products.length}
            {filtered.length > 0 && (
              <> — Page {clampedPage} of {totalPages}</>
            )}
          </p>

          {filtered.length === 0 ? (
            <p>No results</p>
          ) : (
            <>
              <ul style={{ lineHeight: 1.5, padding: 0, listStyle: "none" }}>
                {pageItems.map(p => (
                  <li
                    key={p.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "80px 1fr",
                      gap: 12,
                      padding: 12,
                      border: "1px solid #eee",
                      borderRadius: 10,
                      marginBottom: 10
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      width={80}
                      height={80}
                      style={{ objectFit: "contain" }}
                    />
                    <div>
                      <div style={{ fontWeight: 600 }}>{p.title}</div>
                      <div style={{ opacity: 0.75 }}>
                        {p.description.length > 140 ? `${p.description.slice(0, 140)}…` : p.description}
                      </div>
                      <div style={{ marginTop: 6, fontWeight: 700 }}>${p.price.toFixed(2)}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={clampedPage <= 1}
                >
                  ← Prev
                </button>
                <span>
                  {start + 1}–{Math.min(start + PER_PAGE, filtered.length)} of {filtered.length}
                </span>
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={clampedPage >= totalPages}
                >
                  Next →
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
