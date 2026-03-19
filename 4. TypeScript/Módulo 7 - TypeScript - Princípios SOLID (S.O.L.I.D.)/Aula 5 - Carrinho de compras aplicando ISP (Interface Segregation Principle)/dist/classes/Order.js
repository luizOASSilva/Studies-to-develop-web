export class Order {
    shoppingCart;
    messaging;
    persistency;
    customer;
    _orderStatus = 'open';
    constructor(shoppingCart, messaging, persistency, customer) {
        this.shoppingCart = shoppingCart;
        this.messaging = messaging;
        this.persistency = persistency;
        this.customer = customer;
    }
    get orderStatus() {
        return this._orderStatus;
    }
    checkout() {
        if (this.shoppingCart.isEmpty()) {
            console.log('Seu carrinho de compras está vazio');
        }
        this.messaging.sendMessage(`Seu pedido com total de ${this.shoppingCart.total()} foi recebido.`);
        this._orderStatus = 'closed';
        this.persistency.saveOrder();
        this.shoppingCart.clear();
        console.log('O cliente é: ', this.customer.getName() + ', ' + this.customer.getIDN);
    }
}
//# sourceMappingURL=Order.js.map