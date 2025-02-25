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

async function exec() { // a declaração "async function" define uma função assíncrona que retorna uma promise. Quando a função assíncrona retorna um valor, a promise é resolvida com o valor retornado, quando a função lança uma exceção, a promise é rejeitada
    try { // em async function, "try" se faz essencial para o tratamento de possíveis erros ao rejeitar uma promise
        const one = await waitFunc("fase1", randNum(1, 3)); // "async function" pode conter a expressão "await", que pausa a execuçào da função assíncrona e espera a resolução da promise passada
        console.log(one);

        const two = await waitFunc('fase2', randNum(1, 3)); // variável "two" somente receberá um valor depois que esperar(await) o valor retornado pela promise na função "waitFunc()"
        console.log(two);

        const three = await waitFunc('fase3', randNum(1, 3));
        console.log(three);
    } catch(err) { // caso try retorne um erro, catch trata o erro
        console.log(err);
    }
}

exec()

// exemplo com erro no meio de uma "async function"
async function exec2() { 
    try {
        const one = await waitFunc("fase1 outro", randNum(1, 3));
        console.log(one);

        const two = await waitFunc(1000, randNum(1, 3));
        console.log(two);

        const three = await waitFunc('fase3 outro', randNum(1, 3));
        console.log(three);
    } catch(err) {
        console.log(err);
    }
}

exec2();
