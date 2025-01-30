
// em funções declaradas tradicionalmente, os argumentos enviados em sua chamada, não precisam necessariamente de um parâmetro para recebe-los. Para isso, o JavaScript reserva a palavra "arguments", para capturar todos os argumentos passados para um parâmetro, mesmo que esse não exista na declarção da função
function funcao() { // função sem parâmetro definido
    console.log(arguments); // arguments é a palavra reservada para armazenar os argumentos
    console.log(arguments[0]) // pode ser tratado como um array, contendo índice em seus elementos
}
funcao(1,2,3); // exemplo de argumento enviado ao parâmetro da função

function outraFuncao(a, b) { // mesmo que parâmetros sejam declarados em qantidades menores que a quantidade de argumentos, "arguments" irá capturar todos os argumentos passados a funçào
    console.log(a, b) // variável "a" e variável "b" recebem os dois primeiros argumentos
    console.log(arguments); // arguments, por outro lado, armazena todos. Mesmo que "a" e "b" sejam parâmetros
}
outraFuncao(1, 2, 3);

function outraOutraFuncao(a, b, c) { // quando apssamos parâmetros em números maiores que argumentos, o javascript define a variável, mas não aponta a mesma para algum valor
    console.log(a, b, c); // variável "a" e variável "b" recebem os dois primeiros valores, e c apesar de não atribuída, ainda sim é definida
}
outraOutraFuncao(1, 2);

function outraOutraFuncaoOutra(a, b = 0) { // podemos também atribuir valores padrão a parâmetros, esse valor será utilizado caso nenhum valor seja passado pro parâmetro por argumento. Nesse caso se a variável "b" não for um valor numérico válido, esta é definida por padrão como valor zero
    console.log(a + b,);
}
outraOutraFuncaoOutra(1) // passando apenas o argumento para "a", omitindo o valor de "b"

// o contrário disso, apresentaria o resultado "NaN", pois 1 + undefined = NaN (NOT a NUMBER)

// ** obs: JavaScript só irá assumir o valor padrão passado a um argumento, caso na chamada da sua função, algum valor atribuído por argmento seja igual a "undefined"

function funcaoComObjeto({nome, sobrenome, idade}) { // podemos realizar também a desestruturação de objetos e funções nos parâmetros
    console.log(nome, sobrenome, idade); // valores das propriedades dos objetos, definidas em variáveis por desestruturação
}

let pessoa = {nome: 'Luiz', sobrenome: 'Silva', idade: 19}; // objeto "pessoa"
funcaoComObjeto(pessoa);// enviada como argumento para a fnção

// o mesmo para arrays

function funcaoComArray([nome, raca, idade]) { // realiza a atribição via desestruturação dos valores do array
    console.log(nome, raca, idade);
}

const gato = ['Berenice', 'Vira-lata', '2'];
funcaoComArray(gato);

// podemos utilizar também o perador rest (...) para capturar valores restantes

function conta(acumulador, ...numeros) { // ...(operador rest), joga para um array os valores restantes
    // ** obs: rest precisa ser o último parâmetro de uma função
    for(let numero of numeros){
        console.log(acumulador, numero);
    }
}

conta(0, 20, 30, 40, 50);
