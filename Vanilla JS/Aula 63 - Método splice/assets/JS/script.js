/*     
índices (-)   -5        -4        -3         -2         -1
índices        1         2         3          4          5     */
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
índices            1         2         3          4          5     */
const nomes2 = ['Pedro', 'Victor', 'Felipe', 'Gulherme', 'Beatriz'];

const elRemovido2 = nomes2.splice(-2, 1); // podemos utilizar valores negativos para onde o primeiro argumento irá apontar, nesse caso é feito o tamanho do array em elementos - (menos) o número negativo (mesmo que "array.length - 2")
console.log('elemento removido 2:', elRemovido2); // saída = elemento removido 2: [ 'Gulherme' ]
console.log(nomes2); // saída = [ 'Pedro', 'Victor', 'Felipe', 'Beatriz' ]

const doisElRemovido = nomes2.splice(-3, 2); // podemos remover mais de um elemento nesse caso o próximo elemento é o posterior negativo também. Caso positivo, seria o posterior positivo
console.log('elemento removido 2:', doisElRemovido); // saída = elemento removido 2: [ 'Victor', 'Felipe' ]
console.log(nomes2); // saída [ 'Pedro', 'Beatriz' ]

/*
índices (-)       -5        -4       -3       -2       -1
índices            1         2        3        4        5     */
const frutas = ['Banana', 'Maçã', 'Morango', 'Uva', 'Laranja'];
const removidosMax = frutas.splice(2, Number.MAX_VALUE); // aponta para o índice 2 e remove o total restante de elementos do array
console.log(removidosMax); // saída = [ 'Morango', 'Uva', 'Laranja' ]
console.log(frutas); // saída = [ 'Banana', 'Maçã' ]