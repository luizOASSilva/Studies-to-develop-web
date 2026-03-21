import { Discount, FiftyPercentDiscount, TenPercentDiscount, NoDiscount } from "./Discount";

describe('Discount', () => {
    const cases = [
        { name: 'No discount', discount: new NoDiscount, price: 10.99, expected: 10.99 },
        { name: '50% discount', discount: new FiftyPercentDiscount, price: 10, expected: 5 },
        { name: '10% discount', discount: new TenPercentDiscount, price: 10, expected: 9 },
    ];

    // teste.each(arrayDeCasos)(nomeDoTeste)
    test.each(cases)('$name', ({ discount, price, expected }) => {
        expect(discount.calculate(price)).toBeCloseTo(expected); // executa o teste para cada caso e testa se discount.calculate retorna expected
    });

    // outra forma de fazer, por unidade 

    // it('Shoul have no discount', () => {
    //     const sut = new NoDiscount();
    //     expect(sut.calculate(10.99)).toBeCloseTo(10.99)
    // }); 

    // it('Should apply 50% discount on price', () => {
    //     const sut = new FiftyPercentDiscount();
    //     expect(sut.calculate(150.5)).toBeCloseTo(75.25);
    // });

    // it('should apply 10% discount on price', ()=> {
    //     const sut = new TenPercentDiscount();
    //     expect(sut.calculate(10)).toBeCloseTo(9);
    // });
});