/* function printOrder({ id, product: { name, price }, qty }) {
    console.log(`Заказ #${id}: ${name} — ${price} × ${qty} = ${price * qty}`);
}

printOrder({
    id: 1,
    product: { name: "Milk", price: 25 },
    qty: 3
});
 */
const user = {
    name: "Alex",
    address: {
      city: "Kyiv"
    }
};
  
  console.log(user.address?.city);      // "Kyiv"
  console.log(user.address?.street);    // undefined (нет ошибки!)
  console.log(user.contacts?.phone);    // undefined (нет ошибки!)