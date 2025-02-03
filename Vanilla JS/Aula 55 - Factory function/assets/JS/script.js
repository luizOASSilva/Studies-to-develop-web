// factory functions (funções de fábrica) são funções que retornam objetos, são extremamente importante para criaçào de funções reutilizáveis       

function criaPessoa(nome, sobrenome, altura, peso) { // função que retorna um objeto 
    return {
        nome, 
        sobrenome,
        fala: function(assunto) { // funções dentro de objetos, recebem o nome de método 
            return `${nome} está falando ${assunto}`; // this pode ter diversas funções. Nesse caso "this" se refere a quem o invoca
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura ** 2); // índice armazena o cálculo do imc 
            return indice.toFixed(2); // retorna o valor sobrescrito pela funçào "toFixed", que é responsável por arredondar o valor
        },
        // getter
        get alturaAoQuadrado() { // get vincula uma propriedade do objeto à uma função, que será chamada quando essa propriedade for acessada
            return this.altura ** 2; 
        },
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(' '); // separa todas as palavras da string em elementos do array
            this.nome = valor.shift(); // remove primeiro valor do array
            this.sobrenome = valor.join(' '); // concatena todo o array em uma única string
        }
    };
}

const p1 = criaPessoa('Luiz', 'Silva', 1.75, 90); // atribui a variável p1 o objeto retornado pela função criaPessoa
console.log(p1.alturaAoQuadrado); // alturaAoQuadrado agora pode ser acessada como uma propriedade do objeto
p1.nomeCompleto = 'Luiz Otavio Almeida Soares da Silva';
console.log(p1.sobrenome);
