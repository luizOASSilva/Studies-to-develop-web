// as funções podem ser declaradas de diversas maneiras

// FUNÇÃO TRADICIONAL 
olaMundo(); // funções declaradas da forma comum realizam o chamado "hoisting". Hoisting é um comportamento do JavaScript responsável por mover as declarações de funções para o topo do escopo, durante sua execução
function olaMundo() {
    console.log('Olá mundo');
}

// FUNCTION EXPRESSION
// function expression são first-class objects (objetos de primeira classe). Ou seja, podem ser tratadas como valores, objetos especiais
// function expressions podem ter suas declarações de nome, omitidas, criando assim funções anônimas
const OlaMundo = function() { // nesse caso olaMundo recebe como valor uma função
    console.log('Olá mundo');
}
falaOla(olaMundo); // podemos passar a variável com uma função, como argumento para outra função

function falaOla(func) {
    func(); // após recebida pelo parâmetro, podemos manipular da forma como quisermos, até mesmo executá-la
}

// ARROW FUNCTION
// arrow functions são funções de sintaxe mais curta que também podem ter seu nome omitido
// são funções anônimas
const arrowFunction = () => { // a função pode ser anônima, não necessita de nome
    console.log('Sou uma arrow function');
};
arrowFunction();
