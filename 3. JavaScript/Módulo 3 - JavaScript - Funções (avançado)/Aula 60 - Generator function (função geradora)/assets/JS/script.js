function* geradora() { // Funções geradoras em JavaScript são funções que podem ser interrompidas e depois continuadas
    // código qualquer ...
    yield 'valor1'; // retorna um valor quando a função next() é chamada
    // código qualquer ...
    yield 'valor2';
    // código qualquer ...
    yield 'valor3';
}

const g1 = geradora();

console.log(g1); // retorna um objeto do tipo "generator"
console.log(g1.next());
// "yield" retorna um objeto com duas propriedades:
// - value com o valor retornado
// - done com o valor booleano "true" ou "false". Que indicará se ainda há valor e se ainda há retorno 

console.log(g1.next().value); // apresenta o primeiro valor retornado por "yield" 
console.log(g1.next().value); // apresenta o segundo valor retornado por "yield"

const g2 = geradora();

for (let valor of g2) { // podemos iterar sobre os valores de uma função geradora. Por exemplo em um for of, o JavaScript sabe todos os valores que serão retornados
    console.log(valor);
}

function* geradoraOutra() { // podemos criar uma função que gera valores infinitos ao ser invocada com "next()"
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g3 = geradoraOutra(); 
console.log(g3.next().value); // sempre que é chamada, gera um novo valor
console.log(g3.next().value); // saída = 1

function* geradora3() {
    yield 10;
    yield 11;
    yield 12;
}

function* geradora4() {
    yield* geradora3(); // uma função pode delegar outra função geradora. Esta será executada primeiro
    yield 13;
    yield 14;
    yield 15;
}

const g5 = geradora4();
for(let valor of g5){ // apresenta todos os valores retornados por "yield" na funçào "geradora3" e depois valores retornados na funçao "geradora4"
    console.log(valor);
}