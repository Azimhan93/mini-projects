import { Link } from "react-router-dom";
import { BOOKS } from "../data/books.js";

export default function Books() {
  return (
    <>
      <h2>Books</h2>
      <ul>
        {BOOKS.map(p => (
          <li key={p.id}>
            <Link to={`/books/${p.id}`}>
              {p.title} — ${p.author}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}