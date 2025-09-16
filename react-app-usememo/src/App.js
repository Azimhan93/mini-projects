/* import { useState, useMemo } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const users = [
    "Anna", "John", "Maria", "Alex", "Victoria", "Andrew", "Olivia"
  ];

  // Оптимизация
  const filtered = useMemo(() => {
    console.log("Filtering..."); // чтобы видеть когда реально фильтруется
    return users.filter(u =>
      u.toLowerCase().includes(query.toLowerCase().trim())
    );
  }, [users, query]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Users</h1>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filtered.map((u, i) => <li key={i}>{u}</li>)}
      </ul>
    </div>
  );
} */

/* import { useState, useMemo } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const BOOKS = [
    { id: 1, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
    { id: 2, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 4, title: "A Game of Thrones", author: "George R.R. Martin" },
    { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 6, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 7, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 8, title: "Atomic Habits", author: "James Clear" },
    { id: 9, title: "The Psychology of Money", author: "Morgan Housel" },
    { id: 10, title: "Project Hail Mary", author: "Andy Weir" }
  ];

  const filtered = useMemo(() => {
    console.log("Filtering...");
    return BOOKS.filter(u =>
      u.title.toLowerCase().includes(query.toLowerCase().trim())
    );
  }, [query]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Users</h1>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filtered.map((u) => (
          <li key={u.id}>
            <b>{u.title}</b> — {u.author}
          </li>
        ))}
      </ul>
    </div>
  );
} */

/* import { useState, useCallback, memo } from "react";

// Кнопка инкремента
const IncrementButton = memo(function IncrementButton({ onIncrement }) {
  console.log("🔼 Render IncrementButton");
  return <button onClick={onIncrement}>+1</button>;
});

// Кнопка декремента
const DecrementButton = memo(function DecrementButton({ onDecrement }) {
  console.log("🔽 Render DecrementButton");
  return <button onClick={onDecrement}>-1</button>;
});

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Count: {count}</h2>
      <IncrementButton onIncrement={handleIncrement} />
      <DecrementButton onDecrement={handleDecrement} />
    </div>
  );
} */

import { useState, useCallback, memo } from "react";

const LikeButton = memo(({ onLike }) => {
  console.log("render LikeButton");
  return <button onClick={onLike}>👍 Like</button>;
});

const DislikeButton = memo(({ onDislike }) => {
  console.log("render DislikeButton");
  return <button onClick={onDislike}>👎 Dislike</button>;
});

const ResetButton = memo(({ onReset }) => {
  console.log("render ResetButton");
  return <button onClick={onReset}>🔄 Reset</button>;
});

export default function Counter() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = useCallback(() => setLikes(l => l + 1), []);
  const handleDislike = useCallback(() => setDislikes(d => d + 1), []);
  const reset = useCallback(() => {
    setLikes(0);
    setDislikes(0);
  } , []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Likes: {likes}</h2>
      <h2>Dislikes: {dislikes}</h2>
      <LikeButton onLike={handleLike} />
      <DislikeButton onDislike={handleDislike} />
      <ResetButton onReset={reset} />
    </div>
  );
}