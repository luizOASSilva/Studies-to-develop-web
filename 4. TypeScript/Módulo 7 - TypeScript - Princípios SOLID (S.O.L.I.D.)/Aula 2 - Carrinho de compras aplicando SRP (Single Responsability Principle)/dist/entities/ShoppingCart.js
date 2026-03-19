export class ShoppingCart {
    _items = [];
    addItem(item) {
        this._items.push(item);
    }
    ;
    removeItem(index) {
        this._items.splice(index, 1);
    }
    ;
    get items() {
        return this._items;
    }
    total() {
        return +this._items
            .reduce((previousValue, currentValue) => currentValue.price + previousValue, 0)
            .toFixed(2); // + é um unary plus operator, ou seja, ele converte para tipo number qualquer valor
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        console.log('Carrinho de compras foi limpo...');
        this._items.length = 0;
    }
}
//# sourceMappingURL=ShoppingCart.js.map