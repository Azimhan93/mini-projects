"use client";

import { useEffect, useState } from "react";

export default function AuthorsPage() {
  const [authors, setAuthors] = useState([]);
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");

  async function loadAuthors() {
    const res = await fetch("/api/authors");
    setAuthors(await res.json());
  }

  async function addAuthor() {
    await fetch("/api/authors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, surName }),
    });
    setName("");
    setSurName("");
    loadAuthors();
  }

  async function updateAuthor(id) {
    const newName = prompt("Введите имя автора:");
    const newSurName = prompt("Введите фамилию автора:");
    if (!newName && !newSurName) return;
    await fetch("/api/authors", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name: newName, surName: newSurName, }),
    });
    loadAuthors();
  }

  async function deleteAuthor(id) {
    if (!confirm("Удалить автора?")) return;
    await fetch("/api/authors", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    loadAuthors();
  }

  useEffect(() => {
    loadAuthors();
  }, []);

  return (
    <div>
      <h1>👤 Authors</h1>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Surname"
        value={surName}
        onChange={e => setSurName(e.target.value)}
      />
      <button onClick={addAuthor}>Add</button>

      <ul>
        {authors.map(a => (
          <li key={a.id}>
            {a.name} {a.surName} ({a.books.length} books)
            <button onClick={() => updateAuthor(a.id)}>✏️</button>
            <button onClick={() => deleteAuthor(a.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}