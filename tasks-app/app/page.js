export default function HomePage() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-blue-600">🚀 Tasks App</h1>
      <p className="text-gray-600 text-lg">
        Мини-приложение на Next.js + Prisma + JWT + TailwindCSS
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/register"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Зарегистрироваться
        </a>
        <a
          href="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Войти
        </a>
      </div>
    </div>
  );
}
  