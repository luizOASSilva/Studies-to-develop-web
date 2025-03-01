export function falaOi(nome, sobrenome) { // podemos exportar uma função diretamente em sua declaração
    console.log(`Olá ${nome} ${sobrenome}`);
}

export class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie
    }
}
