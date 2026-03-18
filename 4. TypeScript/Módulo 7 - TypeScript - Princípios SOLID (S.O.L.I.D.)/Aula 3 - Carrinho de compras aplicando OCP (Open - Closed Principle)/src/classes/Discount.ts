export abstract class Discount { // classe abstrata obriga subclasse a implementar
    protected discount = 0;

    calculate(price: number): number {
        return price - price * this.discount;
    }
}

export class FiftyPercentDiscount extends Discount {
    discount = 0.5;

    calculate(price: number): number {
        return price - price * this.discount;
    }
}

export class NoDiscount extends Discount {}
