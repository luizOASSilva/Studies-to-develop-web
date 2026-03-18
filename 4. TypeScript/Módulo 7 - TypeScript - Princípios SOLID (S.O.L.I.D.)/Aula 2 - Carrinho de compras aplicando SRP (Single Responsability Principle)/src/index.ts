import { Messaging } from "./services/Messaging.js";
import { Order } from "./entities/Order.js";
import { Persistency } from "./services/Persistency.js";
import { Product } from "./entities/Product.js";
import { ShoppingCart } from "./entities/ShoppingCart.js";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 50));
shoppingCart.addItem(new Product('Shorts', 30));
shoppingCart.addItem(new Product('Tênis', 150));
// shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());

order.checkout();

console.log(order.orderStatus);

// não é permitido, pois é o objeto é readonly -> shoppingCart[0] = { name: 'Caderno', price: 30};
