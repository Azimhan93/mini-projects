/* function getUsers() {
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
  
async function showAdultUsers() {
    try {
      console.log("⏳ Получаю пользователей...");
      const users = await getUsers();
      console.log("📦 Список взрослых:");
      users
        .filter(u => u.age >= 18)
        .forEach(u => console.log(u.name));
    } catch (error) {
      console.error(error);
    } finally {
      console.log("🔔 Запрос завершён");
    }
}
  
showAdultUsers(); */


/* let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    console.log("Hello!");
  };
  
  user.sayHi(); // Hello!

  console.log(user); */



/* function Calculator() {
    this.a = a;
    this.b = b;

    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },

    this.sum = function() {
        return this.a + this.b;
    },

    this.mul = function() {
        return this.a * this. b;
    }
}


let calculator = new Calculator();

calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */




/* 
function sumTo(n) {

    if(n == 1) {
        return n;
    } else {
        return setTimeout((n * sumTo(n - 1)), 2000);
    }
}



console.log(sumTo(5)); */


/* let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
    setTimeout(() => reject("Error!!!"), 2000);
  });
  

  promise.then(
    result => console.log(result), 
    error => console.log(error) 
); */

/* function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("⚠️ Ошибка: сервер недоступен");
        return;
      }

      resolve([
        { name: "Milk", price: 25 },
        { name: "Bread", price: 18 },
        { name: "Apple", price: 8 }
      ]);
    }, 1500);
  });
}


async function showProducts() {
  try {
    const products = await getProducts();
    console.log("📦 Список продуктов:");
    products
      .filter(el => el.price >=10)
      .forEach(p => console.log(`${p.name} — ${p.price} грн`)) 
  } catch(error) {
    console.error(error)
  } finally {
    console.log("🔔 Запрос завершён")
  }
}

showProducts(); */

/* class Product {
    constructor(name, price, qty) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }


    getTotal() {
      return this.price * this.qty;
    }

    applyDiscount(percent) {
      const newPercent = percent / 100;
      return this.price = this.price - (newPercent * this.price);
    }
}

const p1 = new Product("Apple", 10, 5);
p1.applyDiscount(20);
console.log(p1.getTotal()); */


/* const now = new Date();

console.log(now.toLocaleTimeString());
console.log(now.toLocaleDateString()); */

/* const start = new Date(2025, 0, 1); // 1 января 2025
const end = new Date(2025, 7, 13);  // 13 августа 2025

const diffMs = end - start; // разница в миллисекундах
const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
console.log(`Разница: ${diffDays} дней`); */




function daysUntilNewYear() {
  const date = new Date();
  date.setFullYear(2026);
  date.setMonth(0);
  date.setDate(1);

  const diffMs = date - new Date();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  console.log(`До Нового Года осталось: ${diffDays} дней`);
}


daysUntilNewYear();