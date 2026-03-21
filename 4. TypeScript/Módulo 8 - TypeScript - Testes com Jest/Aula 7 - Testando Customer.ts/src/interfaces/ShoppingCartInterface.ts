import { CartItem } from "./CartItem.js";

export interface ShoppingCartInterface {
    items: Readonly<CartItem[]>;
    addItem(item: CartItem): void;
    removeItem(index: number): void;
    total(): number;
    totalWithDiscount(): number;
    isEmpty(): boolean ;
    clear(): void;
}
