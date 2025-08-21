/* async function loadProducts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const users = await response.json();

        const filtered = users.filter(el => el.username.length > 8);

        console.log("📦 Список продуктов (цена > 20):");
        filtered.forEach(p => console.log(`${p.username}`));

    } catch (error) {
        console.error("⚠️", error.message);
    } finally {
        console.log("🔔 Запрос завершён");
    }
}

loadProducts(); */

/* let user = {
    name: 'John',
    surname: 'Smith'
  };
  
  let response = await fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  
  let result = await response.json();
  console.log(result.message); */


/*   async function loadUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
  
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
  
      const data = await res.json();     // парсим JSON
      console.log("Пользователи:", data);
    } catch (err) {
      console.error("⚠️ Ошибка запроса:", err.message);
    } finally {
      console.log("🔔 Готово");
    }
  }

  loadUsers(); */


/*   async function createUser(user) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",   // важно!
          "Accept": "application/json"
        },
        body: JSON.stringify(user)
      });
  
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
  
      const created = await res.json();
      console.log("Создан:", created);
    } catch (e) {
      console.error("⚠️", e.message);
    }
  }
  
  createUser({ name: "Orkhan", email: "a@b.c" }); */


/* async function loadProducts() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
        const res = await fetch("https://fakestoreapi.com/products", {
            signal: controller.signal
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();

        const filtered = data.filter(p => p.rating.rate > 3);

        const sorted = filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    
        console.log("✅ Отфильтрованные товары (цена > 50, по убыванию):");
        sorted.forEach(p => console.log(`${p.category} — ${p.rating.rate}`));

    } catch (error) {
        if (err.name === "AbortError") {
            console.error("⏳ Запрос отменён (таймаут)");
          } else {
            console.error("⚠️ Ошибка:", error.message);
          }
    } finally {
        clearTimeout(timeoutId);
    }
    
}

loadProducts();

async function createPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Hello world",
        body: "Мой первый пост через fetch!",
        userId: 1
      })
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    console.log("✅ Пост создан, id:", data.id);

  } catch (err) {
    console.error("⚠️ Ошибка при создании поста:", err.message);
  }
}

createPost(); */





async function loadUsers() {  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000);


  try {
    
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        signal: controller.signal
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      const filtered = data.filter(p => p.completed === true);

      const sorted = filtered.sort((a, b) => b.id - a.id);

      console.log("✅ Отфильтрованный список по id:");
      sorted.forEach(p => console.log(`${p.id} — ${p.title}`));

  } catch (error) {
      if (error.name === "AbortError") {
        console.error("⏳ Запрос отменён (таймаут)");
      } else {
        console.error("⚠️ Ошибка:", error.message);
      }
  } finally {
      clearTimeout(timeoutId);
  }
}

loadUsers();

async function createPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId: 1,
        name: "Test User",
        email: "test@example.com",
        body: "Hello world!"
      })
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    console.log("✅ Пост создан, id:", data.id);

  } catch (err) {
    console.error("⚠️ Ошибка при создании поста:", err.message);
  }
}

createPost();


async function updatePost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/5", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 5,
        title: "Test Title",
        body: "Bye world!",
        userId: 1
      })
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    console.log("✏️ Пост обновлён:", data);

  } catch (err) {
    console.error("⚠️ Ошибка при обновлении:", err.message);
  }
}

updatePost();


async function deletePost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
      method: "DELETE"
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    console.log("🗑️ Пост удалён успешно!");

  } catch (err) {
    console.error("⚠️ Ошибка при удалении:", err.message);
  }
}

deletePost();