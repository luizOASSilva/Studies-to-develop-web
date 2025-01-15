// tipo de dados primitivos: string, number, null, boolean, symbol
const nome = 'Luiz'; // string
const idade = 10; // number
let altura; // undefined = não apona pra local nenhum na memória, é definido automaticamente após não ser atribuido nenhum valor
let sobrenome = null; // null = não aponta pra local nenhum na memória (mas não é o mesmo que undefined) e deve ser definido por atribuição
const aprovado = false; // boolean (lógico) apenas pode receber o valor true ou false

console.log(typeof(nome), nome, typeof(idade), idade, typeof(altura), altura, typeof(sobrenome), sobrenome, typeof(aprovado), aprovado);


/*

dado passado por referência, não primitivo

const a = [1, 2];
const b = a; // = é considerado operador de atribuição

console.log(a, b);
b.push(3);
console.log(a, b);
*/