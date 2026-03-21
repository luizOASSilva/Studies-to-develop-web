import { Discount } from "./Discount";
import { ShoppingCart } from "./ShoppingCart";

describe('Shopping', () => {
    it('Should be an empty cart when no product is added', () => {
        class DiscountMock extends Discount {}

        const sut = new ShoppingCart(new DiscountMock());
        
        expect(sut.isEmpty()).toBe(true);
    });
});