import { CartItem } from "../interfaces/CartItem.js";

export class ShoppingCart {
    private readonly _items: CartItem[] = [];
    
    addItem(item: CartItem): void { 
        this._items.push(item);
    };  

    removeItem(index: number): void{ 
        this._items.splice(index, 1);
    };

    get items(): Readonly<CartItem[]> {
        return this._items 
    }

    total(): number {
        return +this._items
            .reduce((previousValue, currentValue) => currentValue.price + previousValue, 0)
            .toFixed(2); // + é um unary plus operator, ou seja, ele converte para tipo number qualquer valor
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
    
    clear(): void {
        console.log('Carrinho de compras foi limpo...')
        this._items.length = 0;
    }
}
