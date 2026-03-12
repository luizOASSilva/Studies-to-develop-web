export class Pessoa<T, U> { // typescript infere sozinho com constructor
    constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Pessoa('Luiz', 20);
const pessoa2 = new Pessoa(['Luiz'], {idade: 20});

export class Stack<T> { // quando valores não são diretamente setados, pode ocorrer problema de tipagem
    private contador = 0;
    private elementos: { [K: number]: T } = []; // o elemento pode ser acessado com um number do tipo K, maso valor armazenado é do tipo T

    push(elemento: T) {
        this.elementos[this.contador] = elemento;
        this.contador++;
    }

    pop(): T | void{
        if(this.isEmpty()) return undefined

        this.contador--;
        const elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    }

    isEmpty (): boolean {
        return this.contador === 0;
    }

    size(): number {
        return this.contador;
    }

    show(): void { // undefined e void são valores vazios
        for(const chave in this.elementos) {
            console.log(this.elementos[chave])
        }
    }
}

const stack = new Stack<number>(); // nesse caso devemos inferir o tipo na chamada da classe para dizer ao typescript que estamos enviando number 

stack.push(1);
stack.push(2);
stack.push(3);
stack.show();
