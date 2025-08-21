export default class User {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            return this.balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            return this.balance -= amount;
        }
    }

    showBalance() {
        return console.log(`My name is ${this.owner} and my balance: ${this.balance}`);
    }
}
