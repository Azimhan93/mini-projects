export default function HomePage() {
  return (
    <>
      <h1>Next.js + Prisma + SQLite</h1>
      <p>
        Мини-проект: пользователи в базе данных через Prisma (SQLite).
      </p>
      <ul>
        <li>
          <a href="/authors">👤 Authors — CRUD</a>
          <a href="/books">Books — CRUD</a>
        </li>
      </ul>
    </>
  );
}