export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string, // por problemas de declaração duplicada, utilizamos por convenção o nome do atributo declarado com underline
    ) {
        this.cpf = _cpf; // agora todo valor enviado mesmo que 
    }

    set cpf(cpf: string) { // setters não retornam valores esão responsáveis por atribuir valores aos atributos
        this._cpf = cpf;
    }

    get cpf(): string { // setter permite fazer modificações no valor passado por getter
        return this._cpf.replace(/\D/g, '');
    }
}

const pessoa = new Pessoa('Luiz',  'Otávio', 20, '000-000-000-00'); // valores atribuídos diretamente, não passam pelo getter nem pelo setter
pessoa.cpf = '511-598-868-22'; // assim chamamos o setter para atribuição de valor
console.log(pessoa.cpf); // assim chamamos o getter, valor retornado já vem formatado pelo getter