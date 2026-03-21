import { Product } from "./Product";

describe('Product', () => {
    let sut: Product;

    beforeEach(()=> {
        sut = new Product('teste', 0);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should return undefined', () => {
        expect(sut).toBeInstanceOf(Product);
    });

    it('should have property name and price', () => {
        expect(sut).toEqual({ name: 'teste', price: 0 });
        
        expect(sut).toHaveProperty('name', 'teste');
        expect(sut).toHaveProperty('price', 0);

        expect(sut.price).toBeCloseTo(0.004);
    });
});