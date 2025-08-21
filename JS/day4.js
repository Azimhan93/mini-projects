class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `My name is ${this.name} and I'm ${this.age} years old`;
    }
}


let person = new Person('Jack', 18);

console.log(person.getInfo());

class Show extends Person {
    getAge() {
        return this.age;
    }
}

let show = new Show('Tom', 20);

console.log(show.getAge());
console.log(show.getInfo());