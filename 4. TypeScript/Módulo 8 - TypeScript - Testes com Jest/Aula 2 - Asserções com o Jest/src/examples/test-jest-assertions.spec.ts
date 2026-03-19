// Asserção é uma afirmação que valida se o resultado real de um código corresponde ao resultado esperado

describe('Primitive values', () => {
    it('should test jest assertions', ()=> {
        const number = 10;

        expect(number).toEqual(10);
        expect(number).toBe(10); // to be não funciona para objetos, mesmo quevalores iguais, retornando falso.

        expect(number).not.toBeFalsy(); // não seja falso

        expect(number).toBeTruthy(); // thruhy value, Valor que se transforma em verdadeiro

        expect(number).toBeGreaterThan(9) // maior que 9
        expect(number).toBeGreaterThanOrEqual(9) // maior ou igual a 9
        expect(number).toBeLessThan(11); // menor que 11
        expect(number).toBeLessThanOrEqual(10); // menor ou igual a 10

        expect(number).toBeCloseTo(10.005, 2) // próximo a 10.01 e 2 dígitos

        expect(number).toHaveProperty('toString'); // possui a propriedade 
    })
})