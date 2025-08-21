import Product from "./product.js";

const apple = new Product("Apple", 10, 5);
console.log(`До скидки: ${apple.getTotal()}₴`);

apple.applyDiscount(20); // скидка 20%
console.log(`После скидки: ${apple.getTotal()}₴`);