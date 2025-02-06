/* reescreva a frase utilizando os conceitos de strings aprendidos:

Seu nome é: ______
Seu nome tem ______ letras
A segunda letra do seu nome é: ______
Qual o primeiro índice da letra "o" no seu nome? ______
Qual o último índice da letra "o" no seu nome? ______
As últimas 3 letras do seu nome são: ______
As palavras do seu nome são: ______
Seu nome com letras maiúsculas: ______
Seu nome com letras minúsculas: ______

*/

const nome = prompt('Escreva seu nome completo:');
document.body.innerHTML += `O seu nome é: ${nome} <br />`; // innerHTML escreve textos dentro do documento. A atribuição += permite ao texto que ao inserir a próxima string no documento, não apague a anterior
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra "o" no seu nome? ${nome.indexOf('o')} <br />`;
document.body.innerHTML += `Qual o último índice da letra "o" no seu nome? ${nome.lastIndexOf('o')} <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3, nome.length)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;

