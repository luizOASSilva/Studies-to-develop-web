const confirma = confirm('Deseja realmente prosseguir?');
console.log(typeof(confirma), confirma);
let confirma2;

confirma2 = confirm('Deseja salvar a resposta dessa caixinha?');

let num1;
let num2;

num1 = prompt('Digite a sua idade:');
num2 = prompt('Digite a sua idade:');

num1 = parseInt(num1);
num2 = parseInt(num2);

let idadeSomada = num1 + num2;
console.log(idadeSomada);

/*
alert('Este é um alert');
confirm('Deseja mesmo confirmar?');
prompt('Escreva seu nome');
*/