import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2>404 — Not Found</h2>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </>
  );
}