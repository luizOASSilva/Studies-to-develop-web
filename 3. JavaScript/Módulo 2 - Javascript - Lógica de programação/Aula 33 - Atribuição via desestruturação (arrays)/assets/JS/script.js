let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const newOrder = [b, c, a];

[a, b, c] = newOrder; // atribuição via desestruração permite extrair valores de um array e atribuí-los a variáveis de forma mais concisa e legível. Com ela, você pode "desempacotar" os valores de um array diretamente em variáveis.
console.log(a, b, c);

function f() {
    return [10, 20]
}

const [num1, num2] = f(); // a atribuição via desestruturação pode ocorrer também no retorno de uma função
console.log(num1, num2)

// índice:       0    1    2    3    4    5    6    7    8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const numero1 = numeros[0]; -> para atribuir valores a variável, vindos de um array, podemos usar o nome da variável e entre "[]" o índice (posição) no array do valor
// const numero2 = numeros[1]; -> para atribuir cada valor, seria necessário um esforço de criar uma variável e realizar cada atribuição repetidamente

// para isso a desestruturação facilitou a vida de quem desenvolve e precisa lidar com atribuição dos valores de um array. Por exemplo:

const [valor1, valor2, valor3, valor4, valor5, ...resto] = numeros; // permite criar variáveis independentes e realizar atribuições de acordo com a ordem nos índices do array
// **obs: nem todos os valores necessitam de uma atribução
// podemos utilizar o operador "rest" (resto) operator. Utilizamo os "..." (três pontos) e em seguida o nome da variável que irá receber em um array o restante dos valores não atribuidos

console.log(valor1, valor2, valor3, valor4, valor5); // saída = 100 200 300 400 500 em variáveis independentes

console.log(resto); // saída = [ 600, 700, 800, 900] em um único array

// **obs: "..." pode assumir duas operações:
// ... (rest) -> prega o restante
// ... (spread) -> expande o valor de um array ou objeto para outro array ou objeto

const [numSelecionado1, , numSelecionado2, , numSelecionado3, , numSelecionado4, , numSelecionado5] = numeros; // podemos pular valores de maneira muito simples. É possícel apenas colocando suas posições na ordem como variáveis de nome vazias entre vírgulas
console.log(numSelecionado1, numSelecionado2, numSelecionado3, numSelecionado4, numSelecionado5); // saída = 100 300 500 700 900

// trabalhando com matrizes (array de arrays)

const listaCompleta = [[1,2,3], [4,5,6]]; // podemos também desestruturar matrizes. Que funciona como um array de arrays
const [lista1, lista2] = listaCompleta; // realiza-se a atribuição do array para variáveis que assumirão o papel de array
console.log(lista1, lista2)

const item1 = lista1[0]; // e então para acessar o índice, a tratativa é a mesma de um array
console.log(item1); // saída = 1



