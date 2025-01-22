// ? : -> operação ternária
// a operação ternária serve para encurtar ou como um atalho para construção de um if. Normalmente operações ternárias são usadas para casos simples de instruções condidicionais

let pontuacaoUsuario = 1000

/*
if(pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
*/

// a instrução condicional simples a cima pode ser encurtada utilizando a operação ternária

let nívelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nívelUsuario);

// condição ?
// se a condição for verdadeira, a expressão é avaliada e retorna o resultado
// condição :
// se a primeira condição for falsa, retorna o valor após a operação :

pontuacaoUsuario = 800; 

nívelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nívelUsuario); // saída: usuário normal

// outro exemplo

let corUsuario = null;

let corPadrao = corUsuario || 'Preto' // como null é um falsy value e a operação || (OR) procura o primeiro valor verdadeiro, a cor setada será preto

console.log(corPadrao); // saída = preto

corUsuario = 'Rosa';

corPadrao = corUsuario || 'Preto'; // caso ele escolha a cor, como será o primeiro valor positivo, a cor padrão será rosa

console.log(corPadrao);

// mais um exemplo

let idade = 18; 

let bebida = idade >= 18 ? servirVinho() : servirSuco(); // se o usuário tiver 18 anos ou for mais velho que essa idade, invoca a função servirVinho() senão servirSuco()

function servirVinho (){
    return 'Vinho';
}

function servirSuco (){
    return 'Suco de uva';
}

console.log(bebida);

idade = 17;

bebida = idade >= 18 ? servirVinho() : servirSuco();

console.log(bebida);
