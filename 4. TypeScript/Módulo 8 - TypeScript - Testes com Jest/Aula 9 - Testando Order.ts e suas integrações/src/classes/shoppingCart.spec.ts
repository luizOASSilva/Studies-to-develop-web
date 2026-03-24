import { CartItem } from "../interfaces/CartItem";
import { Discount } from "./Discount";
import { ShoppingCart } from "./ShoppingCart";

const PRODUTO_1: CartItem = { name: 'Produto 1', price: 10 };
const PRODUTO_2: CartItem = { name: 'Produto 2', price: 20 };
const CALCA: CartItem = { name: 'Calça', price: 200 };
const CANETA: CartItem = { name: 'Caneta', price: 10 };

describe('ShoppingCart', () => {
    describe('ShoppingCart without discount', () => {

        let sut: ShoppingCart;

        class NoDiscountMock extends Discount {
            calculate(price: number): number {
                return price;
            }
        }

        beforeEach(() => {
            sut = new ShoppingCart(new NoDiscountMock());
            jest.resetAllMocks();
        });

        it('should be an empty cart when no product is added', () => {
            expect(sut.isEmpty()).toBe(true);
            expect(sut.items.length).toBe(0);
        });

        it('should add items to the cart', () => {
            sut.addItem(PRODUTO_1);

            expect(sut.items.length).toBe(1);
            expect(sut.isEmpty()).toBe(false);
        });

        it('should remove one item from the cart', () => {
            sut.addItem(PRODUTO_1);
            sut.addItem(PRODUTO_2);

            sut.removeItem(0);

            expect(sut.items.length).toBe(1);
            expect(sut.items[0].name).toBe(PRODUTO_2.name);
        });

        it('should throw RangeError when removing invalid index', () => {
            expect(() => sut.removeItem(99)).toThrow(RangeError);
        });

        it('should return 0 as total for empty cart', () => {
            expect(sut.total()).toBe(0);
        });

        it('should calculate total correctly', () => {
            sut.addItem(PRODUTO_1);
            sut.addItem(PRODUTO_2);

            expect(sut.total()).toBe(30);
        });

        it('should return full price when no discount is applied', () => {
            sut.addItem(PRODUTO_1);

            expect(sut.totalWithDiscount()).toBe(sut.total());
        });

        it('should clear cart', () => {
            sut.addItem(PRODUTO_1);
            sut.addItem(PRODUTO_2);

            sut.clear();

            expect(sut.items.length).toBe(0);
            expect(sut.isEmpty()).toBe(true);
        });
    });


    describe('ShoppingCart with discount', () => {

        let sut: ShoppingCart;

        class TenPercentDiscountMock extends Discount {
            calculate(price: number): number {
                return price - (price * 0.10);
            }
        }

        beforeEach(() => {
            sut = new ShoppingCart(new TenPercentDiscountMock());
        });

        it('should apply discount correctly', () => {
            sut.addItem(CALCA);

            expect(sut.totalWithDiscount()).toBe(180);
        });
    });


    describe('ShoppingCart and Discount integration', () => {

        let sut: ShoppingCart;
        let discountMock: DiscountMock;

        class DiscountMock extends Discount {
            calculate(price: number): number {
                return price - (price * 0.50);
            }
        }

        beforeEach(() => {
            discountMock = new DiscountMock();
            sut = new ShoppingCart(discountMock);
        });

        it('should call discount.calculate(price) with total price once when totalWithDiscount is called', () => {
            sut.addItem(CANETA);

            const discountMockSpy = jest.spyOn(discountMock, 'calculate');

            expect(sut.totalWithDiscount()).toBe(5);
            expect(discountMockSpy).toHaveBeenCalledTimes(1);
            expect(discountMockSpy).toHaveBeenCalledWith(10);
        });
    });
});