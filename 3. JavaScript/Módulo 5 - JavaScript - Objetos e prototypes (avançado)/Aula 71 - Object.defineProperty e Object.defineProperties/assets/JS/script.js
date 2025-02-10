// Object.definePorperty e Object.defineProperties definem propriedades de um objeto
// definePorperty define uma por vez
// defineProperties define várias de uma vez

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', { // configura-se da seguinte maneira: this (referênciando ao objeto), nome da propriedade criada e uma descrição( nesse caso entre chaves{} )

        // os valores para a configuração da propriedade do objeto devem ser true ou false. Como sendo permitido(true) e proíbido(false)

        enumerable: true, // decide se é possível ver a propriedade ao iterar sobre ela, ou percorrê-la
        value: estoque, // valor da propriedade criada. pode ser um valor, função, ou objeto
        writable: false, // decide se o valor pode ser alterado (se true)
        configurable: false, // decide se pode reconfigurar a chave(reecriando) ou excluí-la (delete)
    });
    
    // se "configure" recebesse o valor "true", poderíamos reconfigurar a propriedade do objeto e nesse caso, o valor poderia ser editado devido à "configurable: true". Como exemplo, se seu valor fosse editado desta maneira (Produto.estoque = 1000) o novo valor de estoque seria 1000

    /* Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave, decide se é possível ver a propriedade ao iterar sobre ela, ou percorrê-la
        value: estoque, // valor da propriedade criada
        writable: true, // decide se o valor pode ser alterado
        configurable: true, // decide se pode reconfigurar a chave, excluí-la(criando outra)
    }); */
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 1000;

// a propriedade(chave) "estoque" ao iterada por Object.keys só é mostrada pois "enumerable" tem o valor true
console.log(Object.keys(p1)); // Object.keys retorna um array com o valor de todas as chaves(propriedades).

// o mesmo para for in, onde estoque só é mostrada ao percorrer o object com for in, pois "enumerable" tem o valor true
for(let prop in p1) { // for in atribui o valor da propriedade do objeto p1 para variável prop a cada repetição do laço
    console.log(prop); // apresenta a propriedade atribuida à ela, naquela repetição do laço
}