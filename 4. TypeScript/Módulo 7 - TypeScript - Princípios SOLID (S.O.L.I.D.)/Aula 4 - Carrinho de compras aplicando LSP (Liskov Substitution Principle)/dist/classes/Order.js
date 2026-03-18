export class Order {
    shoppingCart;
    messaging;
    persistency;
    _orderStatus = 'open';
    constructor(shoppingCart, messaging, persistency) {
        this.shoppingCart = shoppingCart;
        this.messaging = messaging;
        this.persistency = persistency;
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
    }
}
//# sourceMappingURL=Order.js.map