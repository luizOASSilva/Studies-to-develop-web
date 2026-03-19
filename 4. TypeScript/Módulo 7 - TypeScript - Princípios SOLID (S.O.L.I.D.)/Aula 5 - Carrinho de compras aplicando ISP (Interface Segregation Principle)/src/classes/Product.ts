import { CartItem } from "../interfaces/CartItem.js";

export class Product implements CartItem {
    constructor(public name: string, public price: number) {}
}