import { CartItem } from "../interfaces/CartItem.js";
import { ShoppingCartInterface } from "../interfaces/ShoppingCartInterface.js";
import { Discount } from "./Discount.js";

export class ShoppingCart implements ShoppingCartInterface {
    private readonly _items: CartItem[] = [];

    constructor(private readonly discount: Discount) {}
    
    addItem(item: CartItem): void { 
        this._items.push(item);
    };  

    removeItem(index: number): void {
    if (index < 0 || index >= this.items.length) {
        throw new RangeError('Invalid index');
    }
    this._items.splice(index, 1);
    }

    get items(): Readonly<CartItem[]> {
        return this._items 
    }

    total(): number {
        return +this._items
            .reduce((previousValue, currentValue) => currentValue.price + previousValue, 0)
            .toFixed(2); // + é um unary plus operator, ou seja, ele converte para tipo number qualquer valor
    }

    totalWithDiscount(): number {
        return this.discount.calculate(this.total());
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
    
    clear(): void {
        console.log('Carrinho de compras foi limpo...')
        this._items.length = 0;
    }
}
