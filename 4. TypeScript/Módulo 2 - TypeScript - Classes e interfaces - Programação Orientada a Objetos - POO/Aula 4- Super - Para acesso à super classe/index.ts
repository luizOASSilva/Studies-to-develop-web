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
    public readonly sala: string;
    
    constructor(
        nome: string,
        sobrenome: string,
        salario: number,
        cpf: string,
        sala: string,
    ) {
        super(nome, sobrenome, salario, cpf);
        this.sala = sala;
    }
    
    getNomeCompleto(): string { // subclasses podem possuir seus próprios métodos
        console.log('algo antes do método da super classe'); // executa primeiro e depois retoma o comportamento da classe super
        return super.getNomeCompleto(); // quando dizemos super, estamos nos referindo a classe pai, ou seja, podemos resgatar um método que está presente na classe superior 
    }
}

const aluno = new Aluno('Luiz', 'Silva', 3000, '511.598.868-22', 'Lab Redes');

console.log(aluno, aluno.getNomeCompleto());