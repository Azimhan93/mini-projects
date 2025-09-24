"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const res = await fetch("/api/me");
      if (res.ok) {
        setUser(await res.json());
      } else {
        setUser(null);
      }
    }
    loadUser();
  }, []);

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    location.href = "/login";
  }

  if (!user) {
    return (
      <div className="text-center text-gray-600">
        ⏳ Загрузка профиля...
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">👤 Профиль</h1>
      <p>
        <b>Email:</b> {user.email}
      </p>
      {user.name && (
        <p>
          <b>Имя:</b> {user.name}
        </p>
      )}

      <button
        onClick={logout}
        className="cursor-pointer mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        🚪 Выйти
      </button>
    </div>
  );
}