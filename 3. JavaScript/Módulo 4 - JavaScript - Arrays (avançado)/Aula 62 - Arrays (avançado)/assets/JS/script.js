// índices       0        1           2
const nomes = ['Luiz', 'Helena', 'Clarisse']; // declaração de padrão de array (arrays literais)
console.log(nomes);
nomes[2] = 'Márcio'; // atribuindo um novo valor 
console.log(nomes);
delete nomes[2]; // deleta o elemento do índice 2 e atribui um valor vazio
console.log(nomes);

// índices                        0        1       2        3
const listaDeFruta = new Array('Banana', 'Maçã', 'Uva', 'Morango'); // podemos utilizar o construtor do array para criá-lo

// arrays são valores por referência
const novoArray = listaDeFruta; // as duas variáveis apontam para o mesmo lugar na memória

novoArray.pop(); // se removermos o último elemento da váriavel que atribuímos o array, "pop" refletirá na variável base
console.log(listaDeFruta); // apesar do pop ter sido em novoArray, por apontar para o mesmo lugar na memória, "listaDeFruta" é modificado

const novaListaDeFruta = [...listaDeFruta]; // podemos utilizar o "..." (spread operator) que fará o que o próprio nome se refere, espalhará o array, assim criará uma cópia que não aponta para o mesmo local na memória
const elementoRemovido = novaListaDeFruta.pop(); // remove o último elemento do array, caso atribuído à algum valor, retorna esse elemento removido
console.log(elementoRemovido); // saída = uva
console.log(novaListaDeFruta, listaDeFruta); // novaListaDeFruta é modificado. Há a remoção do seu último elemento no array, porém por ser atribuído por spread, listaDeFruta não é alterada

console.log(novaListaDeFruta.length); // podemos capturar o tamanho do array em elementos (não em índices)

const elementoRemovidoComeco = novaListaDeFruta.shift(); // remove o primeiro elemento do array e realoca os índices com base no primeiro elemento removido. Caso atribuído a alguma variável, armazena o valor removido
console.log(elementoRemovidoComeco); // saída banana
console.log(novaListaDeFruta); // removeu banana e agorao novo índice para maçã passa a ser o de banana, ou seja índice "0"

novaListaDeFruta.push('Mamão'); // com push, podemos adicionar um elemento no final do array, acrescentando um novo índice
console.log(novaListaDeFruta); // agora além de maçã, "novaListaDeFruta" tem mamão como um dos seus elementos

novaListaDeFruta.unshift('Manga') // "unshift" adiciona um elemento no começo do array e também realoca os índices conforme a necessidade

// índices            0    1    2    3
const arrayLetras = ['a', 'b', 'c', 'd'];
const fatia = arrayLetras.slice(0, 3); // com o método "slice", podemos fatiar o array para pegar uma determinada quantidade de elementos, conforme a necessidade
// no primeiro argumento onde irá iniciar e no segundo argumento onde irá terminar(um valor depois); 
console.log(fatia);  // "slice" fatiou do índice 0 ao 2([0, 1, 2])

const myName = 'Luiz Otavio Almeida Soares da Silva';
const arrMyName = myName.split(' '); // podemos transformar também uma string(ou qualquer outro valor indexável) em array ustilizando o método split.
// dentro dos parênteses como argumento vai o valor que servirá de decisão para como separar essa string em arrays
console.log(arrMyName); // saída = [ 'Luiz', 'Otavio', 'Almeida', 'Soares', 'da', 'Silva' ] 
// **obs: "split" separou a string em um array com os espaços em branco sendo a decisão para ínicio e fim de cada elemento

const stringMyName = arrMyName.join(' '); // join transforma um array em uma string, como argumento deve-se passar o valor para decisão da junção dos elementos
console.log(stringMyName); // saída = Luiz Otavio Almeida Soares da Silva
// **obs: "join" juntou o array em uma string com os espaços em branco sendo a decisão para ínicio e fim de cada elemento
