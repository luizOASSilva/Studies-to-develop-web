// babel é uma ferramenta JavaScript responsável por "transpilar", ou seja, traduzir e compilar um JavaScript moderno para um código mais antigo. Permitindo assim que esse funcione em qualquer navegador (independente da sua versão) 

const nome = 'Luiz';
const obj = { nome };
const novoObj = { ...obj };

console.log(novoObj);

class Animal {
    constructor(nome, especie) {
        nome = this.nome;
        especie = this.especie;
    }
}
