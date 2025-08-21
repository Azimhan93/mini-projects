const names = ["Alex", "John", "Alex", "Anna", "John", "Tom"];

const arr = [...new Set(names)];

console.log(arr);

const products = [
    ["Milk", 25],
    ["Bread", 18],
    ["Apple", 8]
];

const newObj = new Map(products);

newObj.set('Orange', 22);

console.log(newObj);

newObj.forEach((price, name) => {
    if (price > 10) {
        console.log(`${name} дороже 10 грн`);
    }
});

