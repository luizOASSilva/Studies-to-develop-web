/*
    Open/Closed Principle
    Deve estar aberta para extensão mas fechada para modificação
*/

import { Messaging } from "./services/Messaging.js";
import { Order } from "./classes/Order.js";
import { Persistency } from "./services/Persistency.js";
import { Product } from "./classes/Product.js";
import { ShoppingCart } from "./classes/ShoppingCart.js";
import { FiftyPercentDiscount, NoDiscount } from "./classes/Discount.js";

const fiftyPercentDiscount = new FiftyPercentDiscount()
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 50));
shoppingCart.addItem(new Product('Shorts', 30));
shoppingCart.addItem(new Product('Tênis', 150));
// shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

order.checkout();

console.log(order.orderStatus);

// não é permitido, pois é o objeto é readonly -> shoppingCart[0] = { name: 'Caderno', price: 30};
