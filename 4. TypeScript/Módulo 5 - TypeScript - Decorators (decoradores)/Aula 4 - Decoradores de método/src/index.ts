export function decorador(
    classPrototype: any,    
    nomeMetodo: string, 
    descritor: PropertyDescriptor, 
): any {
    console.log(classPrototype, nomeMetodo, descritor);
    return {
        value: function (...args: string[]) {
            return args[0].toUpperCase();
        }
    }
}

export class UmaPessoa {
    private nome: string;
    private sobrenome: string;
    private idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    @decorador
    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome} está dizendo: ${msg}`;
    }

    get nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if (!primeiroNome) return;
        this.nome = primeiroNome;
        this.sobrenome = palavras.join(' ');
    }
}

const pessoa = new UmaPessoa('Luiz', 'Silva', 20);
const metodo = pessoa.metodo('Hello wolrd!');
console.log(metodo);

