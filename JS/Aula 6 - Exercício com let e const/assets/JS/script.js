// Reescreva a frase Luiz Otavio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.9259259259259254
const nome = 'Luiz Otávio';
const sobrenome = 'Silva';
const idade = 19;
const peso = 80;
const alturaEmMetro = 1.80;
let imc;
let anoNascimento;

imc = peso / (alturaEmMetro * alturaEmMetro); // formúla do IMC
anoNascimento = 2024 - 30; // calcúlo da idade

// pode ser separado por vírgulas
console.log(nome, sobrenome, 'tem', idade, 'pesa', peso, 'KG tem', alturaEmMetro, 'm de altura e seu IMC é de', imc, 'nasceu em', anoNascimento);

// pode ser separado por + que leva em consideração os espaços
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' pesa ' +  peso + ' KG tem ' + alturaEmMetro + 'm de altura e seu IMC é de ' + imc + ' nasceu em ' + anoNascimento);

// pode ser também por template strings que permite criar string com expressões embutidas, permite concatenar dados de uma forma mais eficiente

console.log(`${nome} ${sobrenome} tem ${idade} pesa ${peso} KG tem ${alturaEmMetro}m de altura e seu IMC é de ${imc} nasceu em ${anoNascimento}`); // é iniciada e fechada por crase(acento grave) `` e as variáveis são referënciadas por ${}