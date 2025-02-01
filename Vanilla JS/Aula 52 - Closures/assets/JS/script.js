// closure é uma function dentro de outra function, como o escopo léxico. Porém em closures, a função pai mesmo depois de executada se lembra das variáveis em seu escopo local

function adder(x) { // função que tem como parâmetro "x"
    return (y) => { // retorna uma arrow function(anônima) com parâmetro "y"
        return x + y; // retorna a soma de "x" e "y"
    }
}

var add5 = adder(5); // variável "add5" recebe a arrow function anônima retornada por adder e passa o argumento 5 para o parâmetro "x"
console.log(add5);
const result = add5(10); // a variável "add5" com valor sendo a função "(y) => { return x + y }" agora recebe o argumento 10 atribuído

console.log(result); // result recebe a soma de x + y. Isso só é possível pois em closures, a função filha acessa o escopo externo para buscar uma variável não definida e em closure