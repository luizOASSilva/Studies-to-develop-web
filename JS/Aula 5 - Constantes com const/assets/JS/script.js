/*  Algumas observações
*   - const nome; -> uma variável let não pode ser declarada novamente
*   - não se pode criar variáveis com palavras reservadas
*   ex: const const | const if
*   - o valor de const não pode ser modificado
*   - variáveis precisam ter nomes significativos e explicativos para fácil entendimento
*   ex: prefira nome = 'João' ao invés de n = João
*   - não se pode começar o nome de uma variável com um número
*   - nome das variáveis não podem conter espaços ou traços. Prefira Camel case  ou Snake case
*   ex: const primeiroNome (Camel case) ou const primeiro_nome (Snake case)
*   - variáveis em JavaScript são case-sensitive. Ou seja, letras maiúsculas importam
*   ex: const nomeCliente = 'Luiz' não é o mesmo que const nomecliente = 'luiz'
*   - sempre prefira const ao invés de var, pois var pode gerar complicações desnecessárias
*/      

const nome = 'Luiz'; // const deve ser obrigatóriamente inicializada na sua declaração e deve atribuir valor a mesma
// const nome; geraria um erro
// nome = 'Otavio' a variável declarada com const não pode ser reatribuída com outro valor
console.log(nome);

const primeiroNum = 10; // constante primeiroNum recebe valor 10
const segundoNum = 5; // constante segundoNum recebe valor 5
const resultado = primeiroNum * segundoNum; // constante conta recebe primeiro número * (operador de multiplicação) segundo número
// + - * / -> operadores aritméticos | + -> soma | - -> subtração | * -> multiplicação | / -> divisão
console.log(resultado); // saída = 50 (10 * 5)

const resultadoDuplicado = resultado * 2; // const resultadoDuplicado recebe o calcúlo de resultado (50) * 2 = 100
console.log(resultadoDuplicado); // saída = 100 (50 * 2)

let resultadoTriplicado = resultado * 3 // let resultadoTriplicado recebe o calcúlo de resultado (50) * 3 = 100
console.log(resultadoTriplicado);

resultadoTriplicado = resultadoTriplicado + 5; // let resultadoTriplicado recebe o calcúlo de resultadoTriplicado (150) + 5 = 155
// obs: o antigo valor de 150 foi perdido, o novo valor é 150
console.log(resultadoTriplicado);

// JavaScript é uma linguagem de tipagem dinâmica, ou seja, são linguagens de programação que verificam os tipos de dados durante a execução do programa, não sendo necessária sua indentificação ao declará-la

console.log(typeof(resultadoTriplicado)); // typeof é uma função predefinida pelo JavaScript para mostrar qual o tipo de dado do valor atribuído a variável
// saída = number

console.log(typeof nome); // entre o typeof e a variável não precisa ter parentêse
// saída = string

const num1 = '10'; // constante num1 recebe valor 10 do tipo string
const num2 = 5; // constante num2 recebe valor 5

const conta = num1 + num2; 
console.log(conta); // como o primeiro número é string, o valor será concatenado ou seja, unido
// saída = 105

console.log(typeof(num1 + num2)); // apresentará o tipo de dado do resultado da conta num1 ('10') + num2 (5)
// saída = string