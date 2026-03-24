export class Discount {
    discount = 0;
    calculate(price) {
        return price - price * this.discount;
    }
}
// Open/ Closed principle, aberto para extensão e fechado para modificações
export class FiftyPercentDiscount extends Discount {
    discount = 0.5;
}
export class NoDiscount extends Discount {
}
//# sourceMappingURL=Discount.js.map