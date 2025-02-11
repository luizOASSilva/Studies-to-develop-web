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

    /*
    Object.defineProperty(this, 'estoque', {

        enumerable: true, 
        value: estoque, 
        writable: true, 
        configurable: true, 
    });
    */
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 1000;

// a propriedade(chave) "estoque" ao iterada por Object.keys só é mostrada pois "enumerable" tem o valor true
console.log(Object.keys(p1)); // Object.keys retorna um array com o valor de todas as chaves(propriedades).

// o mesmo para for in, onde estoque só é mostrada ao percorrer o object com for in pois "enumerable" tem o valor true
for(let prop in p1) { // for in atribui o valor da propriedade do objeto p1 para variável prop a cada repetição do laço
    console.log(prop); // apresenta a propriedade atribuida à ela, naquela repetição do laço
}

function Animal(nome, especie, raca) {
    this.nome = nome,
    Object.defineProperties(this, { // pode-se usar o método defineProperties para definir as configurações de mais de uma propriedade do objeto. É o mesmo que defineProperty, porém podendo configurar mais de uma propriedade de uma vez
        especie: { // a propriedade é definida como um objeto, ao invés de passada por parâmetro como argumento
            enumerable: true,
            value: especie,
            writable: false, 
            configurable: false,
        },
        raca: {
            enumerable: false,
            value: raca,
            writable: false, 
            configurable: false,
        },
    });
}

const anim1 = new Animal();

Object.keys(anim1);

for (let val in anim1) { // apenas "nome" e "espécie" aparecem, pois raça possui a configuração "enumerable: false"
    // enumerable: false n permite uma iteração sobre o valor. Espécie aparece pois possui em sua configuráção "enumerable: true"
    console.log(val);
}
