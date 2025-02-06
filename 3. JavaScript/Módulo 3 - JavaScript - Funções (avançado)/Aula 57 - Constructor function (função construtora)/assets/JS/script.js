function Pessoa(nome, sobrenome) { // funções construtoras por convenção tem a primeira letra do seu nome em caractere maiúsculo
    
    const ID = 12345; // em constructor function pode-se criar atributos privados, que não podem ser acessados de fora da função por notação de ponto

    const metodoInterno = () => { // pode-se também criar métodos privados, inacessíveis de fora da função por notação de ponto 

    };

    this.nome = nome; // retorna um objeto com propriedades sem a necessidade de um return
    this.sobrenome = sobrenome;

    this.falaNome = function () { // funções dentro de objetos recebem o nome de método
        console.log(`Esse é meu nome e sobrenome: ${this.nome} ${this.sobrenome}`);
    }
}

const p1 = new Pessoa('Luiz', 'Silva'); // new cria um novo objeto, this aponta para o objeto pessoa e atribui o valor sem a necessidade do return

console.log(p1.nome); // chamando o atributo nome da função construtora p1
p1.falaNome(); // chamando o método do objeto p1

