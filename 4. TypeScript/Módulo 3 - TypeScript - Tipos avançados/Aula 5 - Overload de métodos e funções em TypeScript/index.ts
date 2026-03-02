// overload é a sobrecarga da função, dependendo da quantidade e argumento ela se comporta de maneira diferente. Isso é um overload de função, muito utilizado em bibliotecas externas

type Adder = { // criando várias funções parecidas mas com propósitos diferentes
    (x: number): number;
    (x: number, y: number): number;
    (...arg: number[]): number;
}

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
    if (args.length > 0) {
        return args.reduce((s, y) => s + y, 0) + x + (y || 0); // soma todos os elementos do array + o valor de x e mais o valor de y
    } else {
        return x + (y || 0);
    }
}

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 4))