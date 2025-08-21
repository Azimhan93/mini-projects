/* const user = {name: 'Alex', age: 18};

const json = JSON.stringify(user);

console.log(user);
console.log(json); */

const profile = { name: "Alex", tags: ["js", "react"], createdAt: new Date() };

const json = JSON.stringify(profile);

const obj = JSON.parse(json, (key, value) =>
    key === "createdAt" ? new Date(value) : value
);