export interface CustomerOrder {
    getName(): string;
    getIDN(): string;
}

export interface IndividualCustomerInterface {
    firstName: string;
    lastName: string;
    cpf: string;
}

export interface EnterpriseCustomerInterface {
    name: string;
    cnpj: string;
}