// Podemos tipar array com tipos genéricos Array<T> - T[] 
// T significa tipo genérico ou que aceita qualquer tipo em sua composição inclusive os próprios tipos criados

function somaArgs(...args: Array<number>) { // aceita um array de números 
    return args.reduce((ac, valor) => ac + valor); 
} // o prórpio TypeScript inferiu que o retorno seria number

const result = somaArgs(12, 2) // tipo da variável já inferido pelo retorno da função

function concatenaArgs(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor)
}

const result2 = concatenaArgs('teste', 'testando');

console.log(result2); // texto concatenado

function toUpperCaseArgs(...args: string[]) {
    return args.map((valor) => valor.toUpperCase());
} // retorna um array de string

const result3 = toUpperCaseArgs('tá em maiúsculo', 'é pra estar também');

console.log(result3) // texto todo em upperCase

