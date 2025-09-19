"use client";

import { useEffect, useState } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState("");

  async function loadBooks() {
    const res = await fetch("/api/books");
    setBooks(await res.json());
  }

  async function addBook() {
    await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, authorId }),
    });
    setTitle("");
    setContent("");
    setAuthorId("");
    loadBooks();
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <h1>📚 Books</h1>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <input
        placeholder="Author ID"
        value={authorId}
        onChange={e => setAuthorId(e.target.value)}
      />
      <button onClick={addBook}>Add</button>

      <ul>
        {books.map(b => (
          <li key={b.id}>
            <b>{b.title}</b> — {b.content ?? "No content"} <br />
            👤 Author: {b.author?.name} {b.author?.surName}
          </li>
        ))}
      </ul>
    </div>
  );
}