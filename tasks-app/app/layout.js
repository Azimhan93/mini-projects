import "./globals.css";

export const metadata = {
  title: "Tasks App",
  description: "Next.js + Prisma + JWT + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        <header className="bg-white shadow-md">
          <nav className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
            <div className="flex gap-6 font-semibold text-gray-700">
              <a href="/" className="hover:text-blue-600">🏠 Home</a>
              <a href="/register" className="hover:text-blue-600">📝 Register</a>
              <a href="/login" className="hover:text-blue-600">🔑 Login</a>
              <a href="/tasks" className="hover:text-blue-600">✅ Tasks</a>
            </div>
            <a
              href="/profile"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              👤 Profile
            </a>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}