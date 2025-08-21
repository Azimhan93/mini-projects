export default class Product {
    constructor(name, price, qty) {
      this.name = name;
      this.price = price;
      this.qty = qty;
    }
  
    getTotal() {
      return this.price * this.qty;
    }
  
    applyDiscount(percent) {
      const discountAmount = (percent / 100) * this.price;
      this.price -= discountAmount;
    }
}

