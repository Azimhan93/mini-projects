"use client";

import { useEffect, useState } from "react";

export default function TodoPage() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");


  async function load() {
    const res = await fetch("/api/todos");
    setList(await res.json());
  }


  async function submit() {
    if (!todo.trim()) return;
    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todo }),
    });
    setTodo("");
    load();
  }

  useEffect(() => { load(); }, []);

  return (
    <>
      <h1>📝 Todos (API Routes)</h1>

      <div style={{ display: "grid", gap: 8, maxWidth: 360 }}>
        <input placeholder="Your todo" value={todo} onChange={e => setTodo(e.target.value)} />
        <button onClick={submit}>
            Add todo
        </button>
      </div>

      <h2 style={{ marginTop: 16 }}>List</h2>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.title} {item.done ? "✅" : "❌"}
          </li>
        ))}
      </ul>

      <p style={{ opacity: .7 }}>Данные хранятся в памяти сервера dev. Для продакшена используй БД.</p>
    </>
  );
}
