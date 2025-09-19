export const metadata = {
  title: "Next.js + Prisma (SQLite)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          margin: 0,
          padding: 20,
          background: "#f8f9fa",
        }}
      >
        <header
          style={{
            marginBottom: 20,
            borderBottom: "1px solid #ddd",
            paddingBottom: 10,
          }}
        >
          <nav style={{ display: "flex", gap: 12 }}>
            <a href="/">🏠 Home</a>
            <a href="/authors">📂 Authors</a>
            <a href="/books">Books</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}