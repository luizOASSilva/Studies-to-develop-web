// decorator em classes
@decorator
export class Animal {
    constructor(public cor: string) {}
}

function decorator<T extends new(...args: any[]) => any>(target: T): T{ 
    return class extends target{
        constructor(...args: any[]) {
            super(...args);
            this.cor = this.inverte(args[0])
        }

        inverte(valor: string): string {
            return valor.split('').reverse().join('');
        }
    }
}

const animal = new Animal('Preto');

console.log(animal);


