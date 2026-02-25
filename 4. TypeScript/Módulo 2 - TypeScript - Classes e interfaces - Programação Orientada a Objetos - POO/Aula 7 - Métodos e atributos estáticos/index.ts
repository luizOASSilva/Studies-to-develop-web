export class Pessoa {
    static cpfPadrao = '000.000.000-00'

    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private cpf: string,
    ) {}

    static falaOi(): void {
        console.log('oi');
    }

    nomeCompleto() : string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

Pessoa.falaOi; // métodos estáticos podem ser acessados sem precisar de uma estância de classe

// Pessoa.nomeCompleto gerará erro, pois o método não está definido como estático

Pessoa.cpfPadrao = '511-598-868-22'; // atributos estáticos também podem ser acessados sem a necessidade de uma instância
