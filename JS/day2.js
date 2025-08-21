function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.2) {
          reject("⚠️ Сервер недоступен");
          return;
        }
  
        resolve([
            { name: "Orkhan", age: 25 },
            { name: "Anna", age: 17 },
            { name: "Max", age: 30 }
        ]);
      }, 1500);
    });
  }


getUsers()
  .then(products => {
    console.log("📦 Список пользователей:");
    products.map((el) => console.log(el.age > 18 ? el.name : null));
  })
  .catch(error => console.error(error))
  .finally(() => console.log("🔔 Запрос завершён"));
  