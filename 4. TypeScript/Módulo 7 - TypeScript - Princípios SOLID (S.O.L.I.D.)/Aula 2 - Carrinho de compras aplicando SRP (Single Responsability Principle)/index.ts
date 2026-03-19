import { Messaging } from "./src/services/Messaging.js";
import { Order } from "./src/entities/Order.js";
import { Persistency } from "./src/services/Persistency.js";
import { Product } from "./src/entities/Product.js";
import { ShoppingCart } from "./src/entities/ShoppingCart.js";

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
