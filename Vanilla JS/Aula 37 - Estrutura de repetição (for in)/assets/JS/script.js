// for in é uma estrutura de repetição baseada em looping utilizada para percorrer avariáveis indexadas de uma forma simples

const listaFruta = ['Maçã', 'Banana', 'Uva'];
const nome = 'Helena';

for (let i in listaFruta) { // for in possui escopo de bloco. Quando definimos a variável de controle "i", em "for in" para variáveis indexadas, ela automáticamente assume o seu valor de baseado na quantidade de elementos do array após o prefixo "in"
    console.log(listaFruta[i]);
}

for (let i in nome) {
    console.log(nome[i]);
}

const pessoa = {
    nome: 'Helena',
    sobrenome: 'Daher',
    idade: 18,
    foiReprovadaNoPsicotecnico: true
}

// podemos acessar as propriedades de um objeto de duas formas difcerentes, são elas:
console.log(pessoa.nome); // passando o nome diretamente para o objeto, nomedoObjeto.propriedade
console.log(pessoa['nome']); // passando o nome da propriedade entre colchetes "[]"

for (let i in pessoa) { // for in possui escopo de bloco. Quando definimos a variável de controle "i", em "for in" para objetos, ela automaticamente assume as propriedades do objeto baseado no objeto após o prefixo "in"
    console.log(pessoa[i]); //  a cada volta no looping, apresenta um valor da propriedade atribuída a "i"
}
