import { CustomerOrder, EnterpriseCustomerInterface, IndividualCustomerInterface } from "../interfaces/CustomerInterface.js";

export class IndividualCustomer implements IndividualCustomerInterface, CustomerOrder { // interfaces devem ser pequenas, simples e implementarem apenas o sficientepara seu funcionamento, sem que a classe precise respeitar 
    firstName: string
    lastName: string;
    cpf: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;         
    }

    getName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    getIDN(): string {
        return this.cpf;
    }
}

export class EnterpriseCustomer implements EnterpriseCustomerInterface, CustomerOrder {
    name: string;
    cnpj: string

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;         
    }

    getName(): string {
        return this.name
    }

    getIDN(): string {
        return this.cnpj;
    }
}