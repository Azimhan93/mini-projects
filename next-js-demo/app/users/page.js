async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
  
  export default async function UsersPage() {
    const users = await fetchUsers();
  
    return (
      <>
        <h1>📬 Users (Server Component fetch)</h1>
        <ul>
          {users.map(u => (
            <li key={u.id}>{u.name}: {u.email}</li>
          ))}
        </ul>
        <p style={{ opacity: .7 }}>
          Данные отрендерены на сервере (HTML уже готов на ответе).
        </p>
      </>
    );
}