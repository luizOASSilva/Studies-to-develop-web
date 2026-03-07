// type ObterChaveFn = <O, K>(objeto: O, chave: K) =>  O[K]; gera erro pois K pode ser qualquer tipo de valor

type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) =>  O[K]; // Dizendo que K é no máximo uma chave de O

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
    nome: 'Berenice',
    vacinas: ['Vacina 1', 'Vacina 2'],
};

const vacinas = obterChave(animal, 'vacinas'); // typescript inferiu que otipo é string[]
const cor = obterChave(animal, 'nome');