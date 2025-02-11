// getters e setters são métodos que associam a propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada.
// Além disso, getters e setters podem ser usados para proteger um valor de possíveis divirgências
// get obtém o valor e setter configura

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() { // get  a variável e entrega ao setter, para configurá-la
            return estoque;
        },
        set: function(valor) { // set será chamado sempre que algum valor for atribuído e retornado por get
            // a vantagem de usar "get" e "set" é o processamento da variável da forma como queremos. Nesse exemplo, estoque apenas terá seu valor atribuído caso seu tipo seja idêntico a 'number'
            if(typeof valor !== 'number'){
                console.log('Valor não desejado')
                return;
            }
            estoque = valor;
        }
    });
}

const pessoa1 = new Produto('Óculos', 20, 3);
console.log(pessoa1);
pessoa1.estoque = 'teste';
console.log(pessoa1.estoque); // como getter se torna uma propriedade, ao chamarmos o método não precisamos de "()" parentêses para executar a função

// **obs: getters e setters podem ser excluídos pela instrução delete para objetos
// delete pessoa1.nomeDaFunção