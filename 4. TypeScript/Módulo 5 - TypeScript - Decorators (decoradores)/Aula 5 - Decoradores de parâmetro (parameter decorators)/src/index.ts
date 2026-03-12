export function decorador(classPrototype: any, nomeMetodo: string | symbol, index: number): any {
    console.log('classPrototype:', classPrototype);
    console.log('nomeMetodo:', nomeMetodo);
    console.log('index:', index);
}

class UmaPessoa {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    metodo(@decorador msg: string): string {
        return `${this.nome} dizendo: ${msg}`;
    }
}

console.log('antes');
const pessoa = new UmaPessoa('Luiz');
console.log('depois');
