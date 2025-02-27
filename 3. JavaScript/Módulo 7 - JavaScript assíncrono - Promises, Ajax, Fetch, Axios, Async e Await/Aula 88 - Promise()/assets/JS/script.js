// promises é uma classe que permite a criação de funções de processamento de dados assíncrono, representando um valor que poderá ou não estar disponível no futuro
// promises é ideai para o tratamento de API
let sum = new Promise((resolve, reject) => { // na sua sintaxe, promisse revebe uma arrow function de callback, com dois parâmetros: resolve(função para retornar o resultado da promise) e reject(funçào para retornar o erro da promise) 
    let a = 1 + 1;
    if (a === 2) {
        resolve('Success');
    } else {
        reject('failed');
    }
})

// promises possuem dois métodos, "then", que define o bloco de acordo com o cumprimento da promise. E catch, que define o bloco de acordo com a rejeição da promise

sum.then((message) => { // then executa o bloco de função, caso resolve seja chamado
    console.log(message);
}).catch((message) => { // já catch, esxecuta o bloco de função caso reject seja chamado
    console.log(message);
});

// promises surgem com o propósito de acabar com callback hell(inferno de callback), que são diversos callbacks aninhados que poluem o código
// um bom exemplo é o código a seguir:
// suponha que você deseja receber de uma base de dados o id de todos os usuário cadastrados, mas deseja receber os detalhes de apenas o primeiro

function getAllUsers() { // cria uma função que captura todos os usuários
    return new Promise((resolve, reject) => {
        const arrId = [1, 2, 3]; // cria a variável com todos os id's restornados

        for(let id of arrId) { // checando os valores de cada índice do id
            if (typeof id !== 'number') {
                reject('Valor de id inválido'); // caso o índice seja diferente de número, a promise é rejeitada
                return;
            }
        }

        resolve(arrId); // passa com parâmetro o array de id's para "resolve()"
    });
}

function getUserById(id) {
    return new Promise((resolve, reject) => {
        obj = {
            id,
            name: 'Luiz'
        };
        resolve(obj)
    })
}

getAllUsers().then(arrId => { // .then recupera o parâmetro de arrays e atribui ao argumento arrId
    return getUserById(arrId[0]); // chama "getUserById()" e passa como parâmetro o primeiro índice do array
}).then(user => {
    console.log(user);
}).catch(message => {
    console.log(new Error(message));
})