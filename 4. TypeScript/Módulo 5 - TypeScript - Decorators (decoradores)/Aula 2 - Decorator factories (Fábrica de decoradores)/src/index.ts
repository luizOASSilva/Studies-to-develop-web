function inverteNomeECor(param1: string, param2: string) { // factory decorator permite que sejam passados parâmetros para dentro do decorador
    // Closure
    return function <T extends new (...args: any[]) => any>(target: T): T{
        console.log('Sou decorador e recebi', target);

        return class extends target {
            cor: string;
            nome: string;

            constructor(...args: any[]) {
                super(...args);
                this.nome = this.inverte(args[0]);
                this.cor = this.inverte(args[1]);            
            }

            inverte(valor: string): string {
                return valor.split('').reverse().join('') + param1 + '' + param2;
            }
        };
    };
}

@inverteNomeECor('Luiz', 'Silva')
export class Animal {
    constructor(public nome: string, public cor: string) {
        console.log('Sou a classe');
    }
}

const animal = new Animal('Luiz', 'roxo');
console.log(animal);