"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = exports.CarrinhoDeCompras = void 0;
var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras() {
        this.produtos = [];
    }
    CarrinhoDeCompras.prototype.inserirProduto = function () {
        var produtos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            produtos[_i] = arguments[_i];
        }
        for (var _a = 0, produtos_1 = produtos; _a < produtos_1.length; _a++) {
            var produto = produtos_1[_a];
            this.produtos.push(produto);
        }
    };
    CarrinhoDeCompras.prototype.quantidadeProdutos = function () {
        return this.produtos.length;
    };
    CarrinhoDeCompras.prototype.valorTotal = function () {
        return this.produtos.reduce(function (soma, produto) { return soma + produto.preco; }, 0); // reduce passa por todos os elementos de um array, noralmente usado para concatenação e 
    };
    return CarrinhoDeCompras;
}());
exports.CarrinhoDeCompras = CarrinhoDeCompras;
var Produto = /** @class */ (function () {
    function Produto(_nome, preco) {
        this._nome = _nome;
        this.preco = preco;
    }
    Object.defineProperty(Produto.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.Produto = Produto;
var carrinhoDeCompras = new CarrinhoDeCompras();
var produto1 = new Produto('Camiseta', 20.0);
var produto2 = new Produto('Shorts', 25.5);
console.log(produto1.nome);
carrinhoDeCompras.inserirProduto(produto1);
carrinhoDeCompras.inserirProduto(produto2);
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.valorTotal());
