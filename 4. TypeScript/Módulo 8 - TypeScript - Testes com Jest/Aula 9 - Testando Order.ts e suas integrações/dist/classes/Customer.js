export class IndividualCustomer {
    firstName;
    lastName;
    cpf;
    constructor(firstName, lastName, cpf) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
    }
    getName() {
        return this.firstName + ' ' + this.lastName;
    }
    getIDN() {
        return this.cpf;
    }
}
export class EnterpriseCustomer {
    name;
    cnpj;
    constructor(name, cnpj) {
        this.name = name;
        this.cnpj = cnpj;
    }
    getName() {
        return this.name;
    }
    getIDN() {
        return this.cnpj;
    }
}
//# sourceMappingURL=Customer.js.map