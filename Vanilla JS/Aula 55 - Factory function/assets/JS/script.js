function criaPessoa(nome, sobrenome, altura, peso) { // função que retorna um objeto 
    return {
        nome, 
        sobrenome,
        fala: function(assunto) { // funções dentro de objetos, recebem o nome de método 
            return `${this.nome} está falando ${assunto}`; // this pode ter diversas funções. Nesse caso "this" se refere a quem o invoca
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura ** 2); // índice armazena o cálculo do imc 
            return indice.toFixed(2); // retorna o valor sobrescrito pela funçào "toFixed", que é responsável por arredondar o valor
        }
    };
}

const p1 = criaPessoa('Luiz', 'Silva', 1.81, 60); // retorna um objeto 
console.log(p1.fala("sobre a vida")); // fala é um método do objeto retornado pela função criaPessoa    
const p2 = criaPessoa('Luiz', 'Silva', 1.75, 90);
console.log(p2.imc()); // retorna o imc da pessoa "p2"
