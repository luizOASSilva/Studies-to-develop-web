import { EnterpriseCustomer, IndividualCustomer } from "./Customer";

describe('IndividualCustomer', () => {

    let sut: IndividualCustomer;

    const makeSut = () => {
        return new IndividualCustomer('Luiz', 'Silva', '111.111.111-11');
    }

    beforeEach(() => {
        sut = makeSut();
    });

   it('should have correct properties', () => {
    expect(sut).toMatchObject({
        firstName: 'Luiz',
        lastName: 'Silva',
        cpf: '111.111.111-11',
    });
});

    it('shoud have methods to get name and idn', () => {
        expect(sut.getName()).toBe('Luiz Silva');
        expect(sut.getIDN()).toBe('111.111.111-11');
    });
});

describe('EnterpriseCustomer', () => {

    let sut: EnterpriseCustomer;

    const makeSut = () => new EnterpriseCustomer('Empresa x', '111.111.111/11')

    beforeEach(() => {
        sut = makeSut();
    });

    it('should return correct name', () => {
        expect(sut.getName()).toBe('Empresa x');
    });

    it('should return correct cnpj', () => {
        expect(sut.getIDN()).toBe('111.111.111/11');
    });

    it('should have properties: name and cnpj', () => {
        expect(sut).toEqual({ 
            name: 'Empresa x', 
            cnpj: '111.111.111/11'
        });
    });

    it('should match partial properties', () => { // testa apenas propriedades selecionadas, não todas.
        expect(sut).toMatchObject({
            name: 'Empresa x'
        });
    });
});