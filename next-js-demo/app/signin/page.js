"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  async function handleLogin() {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });

    if (res.ok) {
      router.push("/profile");
    } else {
      alert("Введите имя пользователя");
    }
  }

  return (
    <>
      <h1>Sign in</h1>
      <input
        placeholder="Введите имя"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={handleLogin} style={{ marginLeft: 8 }}>
        Войти
      </button>
    </>
  );
}