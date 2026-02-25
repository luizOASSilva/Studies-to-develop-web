export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = [];

    inserirProduto(...produtos: Produto[]){
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    } 

    quantidadeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0); // reduce passa por todos os elementos de um array, noralmente usado para concatenação e 
    }
}

export class Produto {
    constructor(private _nome: string, public preco: number) {}

    get nome(): string {
        return this._nome;
    }
}

const carrinhoDeCompras = new CarrinhoDeCompras();

const produto1 = new Produto('Camiseta', 20.0);
const produto2 = new Produto('Shorts', 25.5);

console.log(produto1.nome);

carrinhoDeCompras.inserirProduto(produto1);
carrinhoDeCompras.inserirProduto(produto2)

console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.valorTotal()); // somou os valores no método valor total

// em um cenário de aregação entre classes podemos ter produtos distintos e o carrinho de compras pode estar vazio. Essa é a ideia de segregação entre classes, criar classes que dependam uma da outra mas atuem como instâncias separadas