import { CustomerOrder } from "../interfaces/CustomerInterface.js";
import { MessagingInterface } from "../interfaces/MessagingInterface.js";
import { OrderStatus } from "../interfaces/OrderStatus.js";
import { PersistencyInterface } from "../interfaces/PersistencyInterface.js";
import { ShoppingCartInterface } from "../interfaces/ShoppingCartInterface.js";
    
export class Order {
    private _orderStatus: OrderStatus = 'open';

    constructor(
        private readonly shoppingCart: ShoppingCartInterface, 
        private readonly messaging: MessagingInterface,
        private readonly persistency: PersistencyInterface,
        private readonly customer: CustomerOrder
    ) {}

    get orderStatus() {
        return this._orderStatus;
    }

    checkout(): void{
        if (this.shoppingCart.isEmpty()) {
            console.log('Seu carrinho de compras está vazio');
            return;
        }
        
        this.messaging.sendMessage(
            `Seu pedido com total de ${this.shoppingCart.total()} foi recebido.`,
        );

        this._orderStatus = 'closed';
        this.persistency.saveOrder();
        this.shoppingCart.clear();

        console.log('O cliente é: ', this.customer.getName() + ', ' + this.customer.getIDN())
    }
}