/*     
índices (-)   -5        -4        -3         -2         -1
índices        0         1         2          3          4     */
const nomes = ['Luiz', 'Helena', 'Márcio', 'Clarisse', 'Milena'];

// splice concatena os métodos de deletar, adicionar ou fatiar em um único método
// splice(índice, número de elementos, elementos a adicionar)

nomes.splice(4, 1); // aponta para o índice 4 e remove 1 elemento (4, 1)
console.log(nomes); // saída = [ 'Luiz', 'Helena', 'Márcio', 'Clarisse' ]

const elRemovido = nomes.splice(3, 1); // slice também pode retornar o elemento removido à uma variável, diferente de pop, slice retorna um array
console.log(elRemovido); // saída = [ 'Clarisse' ]
console.log(nomes); // elemento "clarisse" removido

/*
índices (-)       -5        -4        -3         -2         -1
índices            0         1         2          3          4     */
const nomes2 = ['Pedro', 'Victor', 'Felipe', 'Gulherme', 'Beatriz'];

const elRemovido2 = nomes2.splice(-2, 1); // podemos utilizar valores negativos para onde o primeiro argumento irá apontar, nesse caso é feito o tamanho do array em elementos - (menos) o número negativo (mesmo que "array.length - 2")
console.log('elemento removido 2:', elRemovido2); // saída = elemento removido 2: [ 'Gulherme' ]
console.log(nomes2); // saída = [ 'Pedro', 'Victor', 'Felipe', 'Beatriz' ]

const doisElRemovido = nomes2.splice(-3, 2); // podemos remover mais de um elemento nesse caso o próximo elemento é o posterior negativo também. Caso positivo, seria o posterior positivo
console.log('elemento removido 2:', doisElRemovido); // saída = elemento removido 2: [ 'Victor', 'Felipe' ]
console.log(nomes2); // saída [ 'Pedro', 'Beatriz' ]

/*
índices (-)       -5        -4       -3       -2       -1
índices            0         1        2        3        4     */
const frutas = ['Banana', 'Maçã', 'Morango', 'Uva', 'Laranja'];
const removidosMax = frutas.splice(2, Number.MAX_VALUE); // aponta para o índice 2 e remove o total restante de elementos do array
console.log(removidosMax); // saída = [ 'Morango', 'Uva', 'Laranja' ]
console.log(frutas); // saída = [ 'Banana', 'Maçã' ]

const marcaCaneta = ['BIC', 'FaberCastel', 'Pilot'];;

const newMarcaCaneta = marcaCaneta.splice(1, 0, 'Pentel', 'Stabilo'); // quando adicionamos argumentos depois dos dois primeiro parâmetros, caso a quantidade de elementos removidos seja 0, ele adiciona os valores
// nesse caso, do índice 1 em diante será adicionado os valores passados após os dois primeiro parâmetros (não são substitutivos para os presentes no array). 

console.log(newMarcaCaneta, marcaCaneta);

const newMarcaCaneta2 = marcaCaneta.splice(0, 2, 'Pentel', 'Stabilo'); // quando colocamos um valor no segundo parâmetro definimos a quantidade de elementos que os novos valores passados por argumento, irá subtituir
// caso seja "0" o segundo parâmetro, os valores não são substuídos e sim posicionados e os demais realocados

console.log(newMarcaCaneta2, marcaCaneta);

/*
índices (-)          -7   -6   -5   -4   -3   -2   -1
índices               0    1    2    3    4    5    6  */
const arrSimbolos = ['^', '/', '?', '&', '*', '@', '!'];

//simulando um pop com splice
const pop = arrSimbolos.splice(-1, 1);
console.log('Removido', pop, 'do fim de:', arrSimbolos);

// simulando um shift com splice
const shiftt = arrSimbolos.splice(0, 1);
console.log('Removido', shiftt, 'do começo de:', arrSimbolos);

// simulando um push com splice
arrSimbolos.splice(arrSimbolos.length, 0, '$');
console.log('Adicionado $ no fim de:', arrSimbolos);

// simulando um push com unshift
arrSimbolos.splice(0, 0, '#');
console.log('Adicionado $ no fim de:', arrSimbolos);
