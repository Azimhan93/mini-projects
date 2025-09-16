export const metadata = { title: "Next Mini Suite (JS)" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        <header style={{ padding: 12, borderBottom: "1px solid #eee" }}>
          <nav style={{ display: "flex", gap: 12 }}>
            <a href="/">Home</a>
            <a href="/users">Server fetch</a>
            <a href="/ssr">SSR</a>
            <a href="/ssg">SSG</a>
            <a href="/isr">ISR</a>
            <a href="/todos">Todos(API)</a>
            <a href="/profile">Admin Profile</a>
            <a href="/signin">Sign in</a>
          </nav>
        </header>
        <main style={{ padding: 24 }}>{children}</main>
      </body>
    </html>
  );
}