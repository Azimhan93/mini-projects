let name = "John";
var surName = "Smith";


function getName(name) {
    return console.log(name);
};

getName(name);


let products = [{ name: "milk", price: 25, inStock: true }, { name: "bread", price: 45, inStock: false }, { name: "apple", price: 8, inStock: true }];

products.push({ name: "pear", price: 50, inStock: true }, { name: "banana", price: 17, inStock: false }, { name: "orange", price: 15, inStock: false }, { name: "water", price: 25, inStock: true });

/* let productsName = products.map(item => item.name);
let productsInStock = products.filter(item => item.inStock == true);
let productsSum = products.reduce((total, item) => total + item.price, 0);
*/

let productsUpperCase = products.map(item => item.nameю);



console.log(productsName);
console.log(productsInStock);
console.log(productsSum);
