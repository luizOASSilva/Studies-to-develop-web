// ** ESCOPO GLOBAL

const verdadeira = true;

let nome = 'Luiz'; // variáveis do tipo "let" possuem escopo de bloco { ... bloco }
var nome2 = 'Luiz'; // variáveis do tipo var tem escopo de função

if(verdadeira) {
    // ** ESCOPO DE BLOCO
    let nome = 'Otávio'; // como são limitadas a blocos, é possível redeclarar a variável " nome"
    console.log(nome, nome2);

    if(!!verdadeira) { // bloco aninhado (dentro de outro bloco)
        let nome = 'Silva'; // como variáveis "let" possuem escopo de bloco, nome2 pode ser novamente recriada
        console.log(nome, nome2);
    }
}

// agora com var

if(verdadeira) {
    let nome = 'Otávio'; 
    var nome2 = 'Almeida'
    console.log(nome, nome2);

    if(!!verdadeira) { 
        let nome = 'Silva';
        var nome2 = 'Soares'; // variável do tipo "var" assume o último valor, independete do seu bloco
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);

function falaOi () {
    var nomeInteiro = 'Luiz Otavio Almeida Soares da Silva';
    console.log(`Olá ${nomeInteiro}!`)
}

falaOi();

// console.log(`Olá ${nomeInteiro}!`); // erro = nomeInteiro is not defined
// ** apesar de variáveis do tipo var possuirem um escopo global, as funções protegem as váriaveis deste tipo. 

console.log(qualquerCoisa);

var qualquerCoisa = 'teste'; // deveria retornar: "variável is not defined". Porém variáveis do tipo "var" realizam um comportamento padrão chamado de "hoisting"
// o Hoisting é o comportamento padrão do JavaScript de mover as declarações para o topo do seu escopo antes da execução do código. Mas não carregam valores