import User from "./user.js";

const user = new User('Alex', 150);


user.deposit(50);
user.deposit(100);

user.withdraw(180);

setTimeout(user.showBalance, 2000);
setTimeout(user.showBalance.bind(user), 4000);


