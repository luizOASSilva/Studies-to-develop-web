const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6];

type meuTipo = number;

async function promiseAsync(): Promise<meuTipo>  {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000);
    })
}