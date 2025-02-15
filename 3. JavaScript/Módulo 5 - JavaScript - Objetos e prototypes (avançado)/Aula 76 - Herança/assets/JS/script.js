function Produto(marca, material, preco) {
    this.marca = marca;
    this.material = material;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

function Camiseta(marca, material, preco, estoque) {
    Produto.call(this, marca, material, preco);
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof estoque !== 'number') return;
            estoque = valor;
        }
    });
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta

const camiseta = new Camiseta('Element', 'Malha', 100, 1000);
estoque = '10';

console.log(camiseta);
camiseta.aumento(25);

console.log(camiseta.estoque);