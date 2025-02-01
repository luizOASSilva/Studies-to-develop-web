// callback function é uma function passada como argumento para outra function. Elas são executadas após a conclusão de uma operação, permitindo que o código continue a ser executado sem interrupções e permite que o código seja síncrono(sequecialmente) ou assíncrono(execução de várias tarefas ao mesmo tempo)

// usabilidade de callback function

function soma(x, y, callback) { // função que realiza soma, tem como parâmetro "x", "y" e uma função de callback
    const result = x + y; // result armazena o resultado da soma argumentos recebidos pelos parâmetros "x" e "y"
    callback(result); //executa a função de callback passada por parâmetro
}

function apresentaSoma(result) { // função responsável por apresentar o resultado da soma passada por parâmetro
    console.log(result); // saída = 15
}
soma(5, 10, apresentaSoma); // passa como argumento os valores "5", "10" e a função de callback

// funções de callback são essenciais para controlar a ordem de execução de funções, para que não haja erro ou funções sendo executadas no tempo incorreto

// também pode ser evidenciado na função setInterval

setInterval(() => { // set interval necessita de dois argumento para suprir seus parâmetros. A função de callback(arrow function) como parâmetro e o intervalo em milissegundos para a execução da função
    console.log('testando callback'); 
}, 1000); // quando bate 1000 milissegundos, a função anônima de callback é executada