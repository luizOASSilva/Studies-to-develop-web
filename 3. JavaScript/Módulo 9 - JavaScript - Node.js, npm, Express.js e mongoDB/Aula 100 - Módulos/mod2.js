// module.exports = function(x, y) { podemos exportar diretamente uma função por meio de module.exports e a função
//     return x + y;
// }

// console.log(module.exports(2, 3)) podemos utilizar o módulo diretamente

module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está latindo, au au`);
    }
};
