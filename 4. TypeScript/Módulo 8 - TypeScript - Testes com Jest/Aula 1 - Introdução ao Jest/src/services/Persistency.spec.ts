describe('Testando alguma coisa', ()=> { // grupo de testes 
    it('Esse teste agora está no describe', () => {
        const teste = 'teste'

        expect(teste).toBeFalsy(); // toBeFalsy - deve ser falsy? valores que viram falso.
    });
});

it('Descrição do teste (IT)', () => {
    const number = 1;

    expect(number).toBe(1); // expect(espero) que number seja 1
});

it('Descrição do teste (IT) agora invertido', () => {
    const number = 1;

    expect(number).not.toBe(1);
});

test('Descrição do teste', () => {
    const nome = 'Luiz';
    expect(nome).toBe('Luiz');
});