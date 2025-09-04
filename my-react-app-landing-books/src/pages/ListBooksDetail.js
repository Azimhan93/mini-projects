import { useParams, useNavigate } from "react-router-dom";
import { BOOKS } from "../data/books.js";

export default function ListBooksDetail() {
  const { id } = useParams();              
  const navigate = useNavigate();
  const book = BOOKS.find(p => p.id === Number(id));


  if (!book) {
    return (
      <>
        <h2>Book not found</h2>
        <button onClick={() => navigate("/books")}>Back to books</button>
      </>
    );
  }

  return (
    <>
      <h2>{book.title}</h2>
      <p>Found: { book.author } - { book.year }</p>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => navigate(-1)}>← Back</button>
        <button onClick={() => navigate("/books")}>All books</button>
      </div>
    </>
  );
}