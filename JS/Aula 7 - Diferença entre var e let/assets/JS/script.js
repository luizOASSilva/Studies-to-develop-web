// ECMAScript 2015 (ES6) 
// responsável por solucionar o problema do tipo de dado var ao apresentar o let
// responsável pela padronização da linguagem javascript e responsável também pelas documentações oficiais
var nome = 'Luiz';
var nome = 'Otávio';
nome = 'Helena'; // não recomendado, pois cria uma variável global

console.log(nome); // pelo tipo var a variável é possível ser redeclarada (o que pode ser um problema)

let sobrenome = 'Silva'; // variáveis let não pode ser redefinida

console.log(sobrenome);