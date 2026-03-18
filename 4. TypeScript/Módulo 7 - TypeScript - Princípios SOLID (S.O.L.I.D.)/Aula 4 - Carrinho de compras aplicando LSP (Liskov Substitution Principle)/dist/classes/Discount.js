export class Discount {
}
export class FiftyPercentDiscount extends Discount {
    discount = 0.5;
    calculate(price) {
        return price - price * this.discount;
    }
}
//# sourceMappingURL=Discount.js.map