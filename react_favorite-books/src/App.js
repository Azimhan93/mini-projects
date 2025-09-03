import { useState } from "react";


export default function App() {
  const books = [
    { id: 1, title: "Harry Potter",  author: 'Joana Rowling' },
    { id: 2, title: "The King of the Rings",  author: 'Jack Tolkin'  },
    { id: 3, title: "Gladiator", author: 'Steven Spielberg'  },
  ];

  const [favorites, setFavorites] = useState({});
  const bookCount = Object.values(favorites).reduce((sum, q) => sum + q, 0);

  function addToFavorites(id) {
    setFavorites(prev => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1
    }));
  }

  function clearFavorites() {
    return setFavorites({});
  }

  
  return (
    <div style={{ fontFamily: "sans-serif", padding: 20, maxWidth: 560 }}>
      <h1>📚 Favorites</h1>

      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          padding: 12,
          border: "1px solid #eee",
          borderRadius: 10,
          marginBottom: 16,
        }}
      >
        <span>
          <b>Books in favorites:</b> {bookCount}
        </span>
        <button onClick={clearFavorites} disabled={bookCount === 0}>
          Clear favorites
        </button>
      </div>

      <h2>📋 Book list</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {books.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <strong style={{ width: 180 }}>{item.title}</strong>
            <span style={{ width: 180 }}>{item.author}</span>

            <button onClick={() => addToFavorites(item.id)}>
              Add to favorites
            </button>

            {!!favorites[item.id] && (
              <span style={{ marginLeft: "auto", opacity: 0.75 }}>
                Added: {favorites[item.id]}
              </span>
            )}
          </li>
        ))}
      </ul>

      {bookCount === 0 && (
        <p style={{ marginTop: 12, opacity: 0.7 }}>
          No favorites yet 🙃 Click "Add to favorites" to save a book.
        </p>
      )}
    </div>
  );
}


