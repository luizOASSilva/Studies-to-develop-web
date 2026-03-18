import { OrderStatus } from "../interfaces/OrderStatus.js";
import { Messaging } from "../services/Messaging.js";
import { Persistency } from "../services/Persistency.js";
import { ShoppingCart } from "./ShoppingCart.js";
    
export class Order {
    private _orderStatus: OrderStatus = 'open';

    constructor(
        private readonly shoppingCart: ShoppingCart, 
        private readonly messaging: Messaging,
        private readonly persistency: Persistency
    ) {}

    get orderStatus() {
        return this._orderStatus;
    }

    checkout(): void{
        if (this.shoppingCart.isEmpty()) {
            console.log('Seu carrinho de compras está vazio');
        }
        
        this.messaging.sendMessage(
            `Seu pedido com total de ${this.shoppingCart.total()} foi recebido.`,
        )

        this._orderStatus = 'closed';
        this.persistency.saveOrder();
        this.shoppingCart.clear();
    }
}