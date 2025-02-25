function randNum(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() *  (max - min) + min);
}

function waitFunc(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(new Error('Valor diferente de String'));
            return;
        }

        setTimeout(() => {
            resolve(msg);
        }, time)
    });
}

const promises = [
    'Primeiro valor',
    waitFunc('Promise 1', 3000),
    waitFunc('Promise 2', 500),
    waitFunc('Promise 3', 1000),
    // waitFunc(10, 1000), caso haja uma "promise()" rejeitada, todas as demais também são, o valor devolvido é levado ao catch por meio do "reject()"
    'Outro valor'
];

// Promise.all resolve todas as promises e devolve todos os valores resolvidos, diferentemente de funções "Promises()" aninhadas
// promise.all precisa de um array como argumento ao seu parâmetro
Promise.all(promises).then(valor => { // resolve individualmente cada promise e executa um callback para todas
    console.log(valor);
}).catch(erro => { // trata o erro caso alguma promise() seja rejeitada
    console.log(erro);
});

const promises2 = [
    waitFunc('Promise 1', 3000),
    waitFunc('Promise 2', 500),
    waitFunc('Promise 3', 1000),
];

// Promise.race() funciona como uma corrida, o método devolve a primeira "promise()" resolvida
Promise.race(promises2).then(valor => { 
    console.log('Primeira promise() resolvida: ', valor); // a primeira "promise" resolvida será a promise 2 do array "promises2". Pois possui o menor tempo de timeout
}).catch(err => {
    console.log(err);
});

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache'); // Promise.resolve são promises já resolvidas para testes diretamente no "then()"
    } else {
        return waitFunc('baixei a página', 3000);
    }
}

baixaPagina().then(dados => { // cairá diretamente no then(), caso "Promise.resolve"
    console.log(dados);
}).catch(err => {
    console.log(err);
})

function baixaPagina2() {
    const emCache = true;

    if(emCache) {
        return Promise.reject(new Error('Erro vindo direto de Promise.reject()')); // Promise.resolve são promises já resolvidas para testes diretamente no "then()"
    } else {
        return waitFunc('baixei a página', 3000);
    }
}

baixaPagina2().then(dados => {
    console.log(dados);
}).catch(err => { // cairá diretamente no catch, caso "Promise.reject()"
    console.log(err);
})
