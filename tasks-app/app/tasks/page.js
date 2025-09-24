"use client";

import { useEffect, useState } from "react";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  async function loadTasks() {
    const res = await fetch("/api/tasks");
    if (res.ok) setTasks(await res.json());
  }

  async function addTask() {
    if (!title.trim()) return;
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed }),
    });
    setTitle("");
    setCompleted(false);
    loadTasks();
  }

  async function deleteTask(id) {
    await fetch("/api/tasks", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    loadTasks();
  }

  async function editTask(task) {
    const newTitle = prompt("Новый заголовок:", task.title);
    if (!newTitle?.trim()) return;

    const newCompleted = confirm("Сделать задачу выполненной?");

    await fetch("/api/tasks", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: task.id, title: newTitle, completed: newCompleted }),
    });

    loadTasks();
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Tasks</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border rounded px-2 py-1"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={completed}
            onChange={e => setCompleted(e.target.checked)}
          />
          Completed
        </label>
        <button
          onClick={addTask}
          className="cursor-pointer bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-white shadow px-4 py-2 rounded-md"
          >
            <span
              className={`flex-1 ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => editTask(task)}
                className="cursor-pointer text-yellow-600 hover:underline"
              >
                ✏️
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="cursor-pointer text-red-600 hover:underline"
              >
                🗑
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}