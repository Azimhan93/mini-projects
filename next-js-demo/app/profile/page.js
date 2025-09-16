"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    
    const match = document.cookie.match(/(?:^|; )username=([^;]*)/);
    if (match) {
      setUsername(decodeURIComponent(match[1]));
    }
  }, []);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    location.href = "/signin";
  }

  return (
    <>
      <h1>👤 Профиль</h1>
      <p>Добро пожаловать, {username || "пользователь"}!</p>
      <button onClick={handleLogout}>Выйти</button>
    </>
  );
}