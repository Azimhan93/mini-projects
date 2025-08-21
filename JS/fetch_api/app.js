const API_URL = "https://dummyjson.com/todos";
const list = document.querySelector("#todos");     
const form = document.querySelector("#form");      
const todoInput = document.querySelector("#todo");
const completedInput = document.querySelector("#completed");

async function getPosts() {
  list.innerHTML = "⏳ Загружаем...";
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();       // { todos: [...], total, ... }
    renderPosts(data.todos);             // <-- важно!
  } catch (err) {
    list.innerHTML = "⚠️ Ошибка загрузки: " + err.message;
  }
}

/* function renderPosts(todos) {
  list.innerHTML = "";
  todos.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${t.todo}</strong> — ${t.completed}
      <button onclick="updatePost(${t.id})">✏️</button>
      <button onclick="deletePost(${t.id})">🗑️</button>
    `;
    list.appendChild(li);
  });
} */


getPosts();