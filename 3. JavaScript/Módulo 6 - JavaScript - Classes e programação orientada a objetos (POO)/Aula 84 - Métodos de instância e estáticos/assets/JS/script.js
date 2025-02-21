class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentaVolume() {
        this.volume += 2;
    }

    diminuiVolume() {
        this.volume -= 2;
    }

    static trocaPilha() { // criando método de estático
        // static define um método estático pra a classe. Métodos estáticos não são chamados na instância da classe. Em vez disso, são chamados na própia classe
        console.log('Pilha trocaada');
        console.log(this.volume); // "this.volume" retornará undefined, pois como não há uma instância, o construtor não é chamado, logo as propriedades e nem mesmo o objeto retornado por "constructor()" são criados   
    }
}

const controle1 = new ControleRemoto('LG'); // criando uma instância do método controleRemoto

controle1.aumentaVolume();
controle1.aumentaVolume();
console.log(controle1);

// controle1.trocaPilha() gerará erro. Pois métodos estáticos são acessíveis apenas na chamada da própria classe, não utilizando sua instância

ControleRemoto.trocaPilha(); // como "trocaPilha()" se trata de um método estático, apenas ao acessar diretamente da classe é que podemos executá-lo '
// métodos estáticos não possuem acesso aos dados da instância

// métodos estáticos são úteis para organização de funções e métodos e para a criaçao de funções utilitárias. Um dos diferenciais das funções estáticas, é que "this" aponta para o escopo da classe pai (ControleRemoto)
