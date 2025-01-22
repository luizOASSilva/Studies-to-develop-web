// Calcule o ano de nascimento de Luiz, seu IMC reescreva a frase "Luiz Otavio Silva tem 19 anos, nasceu em 2005 pesa 84 KG. Tem 1.8 de altura e seu IMC é de 25.925925925925924" utilizando as variáveis e apresente em um console.log
const nome = 'Luiz Otavio';
const sobrenome = 'Silva';
const idade = 19;
const peso = 84;
const altura = 1.80;
let dataNasc;
let imc;

dataNasc =  2024 - idade;
imc = peso / (altura * altura);

console.log(nome, sobrenome, 'tem', idade, 'anos,', 'nasceu em', dataNasc, 'pesa', peso, 'KG. Tem', altura, 'de altura e seu IMC é de', imc);

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, nasceu em ' + dataNasc + ' pesa ' + peso + ' KG. Tem ' + altura + ' de altura e seu IMC é de ' + imc); // pode ser escrito utilizando + ao invés de vírgula, que levará em consideração o espaço entre variáveis e textos

//template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu em ${dataNasc} pesa ${peso} KG. Tem ${altura} de altura e seu IMC é de ${imc}`) // Template strings é uma funcionalidade do JavaScript que permitem criar strings com expressões embutidas. É iniciada e terminada por ``(crase ou acento grave) e Suas variáveis são inseridas por ${ variável }