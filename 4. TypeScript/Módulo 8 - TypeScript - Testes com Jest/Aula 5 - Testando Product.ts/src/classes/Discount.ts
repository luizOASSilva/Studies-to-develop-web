export abstract class Discount { // classe abstrata obriga subclasse a implementar
    protected discount = 0;

    calculate(price: number): number {
        return price - price * this.discount;
    }
}

// Open/ Closed principle, aberto para extensão e fechado para modificações

export class FiftyPercentDiscount extends Discount {
    discount = 0.5;
}

export class TenPercentDiscount extends Discount {
    discount = 0.1;
}

export class NoDiscount extends Discount {}
