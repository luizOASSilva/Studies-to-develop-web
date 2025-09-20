// tipos literais são subtipos

let x = 10; // TypeScript infere o tipo automaticamente, qualquer valor numérico pode ser atribuído à variável
x = 0b101; 
// x = ''; -> erro, type number não pode ser associado a number

const y = 10; // em constantes tipo literal, não infere como tipo number, mas infere seu valor como fixo

let a: 100 = 100 // podemos tansformar variáveis let em tipos literais, nenhum outro valor além do tipo literal pode ser atibuído à variável
//obs: utilizar let com tipos literais não é muito aconselhável

let teste = 'Luiz';

// let a = 10 -> erro

let b = 200 as const; // chamado de asserção, definindo let como um let e atribuindo seu comportamento como const

const person = {
    name: 'Luiz'as const, // dizendo que a chave deve se comportar como uma constante por meio de asserção
    sobrenome: 'Miranda'
}

// pessoa.nome = 'Luiz';

function escolhaCor(cor: 'Vermelho' | 'Amarelo') { // outra forma de type literals, apenas aceita um dos dois valores, mas não são valores e sim tipos
    return cor;
}

// escolhaCor('azul') -> erro, pois afunção só aceita 2 valores

escolhaCor('Vermelho');


console.log(escolhaCor)