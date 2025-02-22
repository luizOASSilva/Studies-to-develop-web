// getters e setters protegem um código de determinada ação
// suponha que você está desenvolvendo um jogo de corrida em conjunto com sua equipe, onde existe o carro, que pode acelerar e freiar

const _velocidade = Symbol('velocidade'); // symbol é um gerador de dados únicos. Onde cada valor retornado pelo método é único e diferente em cada geração
// dentro de parênteses, symbol recebe uma descrição, que não serve de acesso ao símbolo
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) { // set protege o dado que será tratado
        // set sempre necessita de um parâmetro
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() { // get retorna o dado ao setter
        return this[_velocidade];
    }

    acelerar() {
        if(this.velocidade >= 100) return; // verifica se a velocidade atual é maior ou igual a 100, se for, retorna e para a execução da função. Senão, soma +1 na aceleração
        this[_velocidade]++;
    }

    desacelerar() { // // verifica se a velocidade atual é menor ou igual a 0, se for, retorna e para a execução da função. Senão, diminui -1 na aceleração
        if(this.velocidade <= 0) return;
        this[_velocidade]--;
    }
}

const carro1 = new Carro('Celta'); // instanciando a classe "Carro()", que gerará o objeto

for(let i = 0; i <= 200; i++) { // testando a função acelerar
    carro1.acelerar();
}

carro1.velocidade = 1500; // agora suponha que sem querer alguém da sua equipe, ao desenvolver, atribuiu a velocidade 1500 ao "carro1"
// após a criação de symbol, o valor de dentro do objeto só poderá ser acessadoo em seu escopo e não permite alteração      

console.log(carro1); // o código estará quebrado e lógia de verificar a velocidade para acelerar e freiar, falhará
