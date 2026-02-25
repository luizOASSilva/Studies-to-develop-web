export class Pessoa { // super classe ou classe pai
    constructor(
        public nome: string,
        public sobrenome: string,
        private salario: number,
        protected cpf: string,
    ){}

    getsalario(): number {
        return this.salario;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

export class Aluno extends Pessoa { // criando uma subclasse e herdando atributos e metódos da classe pai
    getNomeCompleto(): string { // subclasses podem possuir seus próprios métodos
        return `${this.nome} ${this.sobrenome}`;
    }
}

const aluno = new Aluno('Luiz', 'Silva', 3000, '511.598.868-22');

console.log(aluno, aluno.getNomeCompleto());