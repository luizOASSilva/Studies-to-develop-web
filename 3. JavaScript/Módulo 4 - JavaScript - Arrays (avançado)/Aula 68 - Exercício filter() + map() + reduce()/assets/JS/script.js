// Retorne a soma do dobro de todos os pares do array "num"

const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numPares = num.filter(num => num % 2 === 0); // faz num / 2 para todos os elementos do array, caso o resto seja 0 (número par), retorna o valor
console.log('Apenas pares:', numPares);

const numDobrado = numPares.map(num => num * 2); // retrona um array de mesmo tamanho. todo valor percorrido no array é multiplicado por 2
console.log('Pares Dobrados:', numDobrado);

const result = numDobrado.reduce((acumulador, valor) => acumulador + valor); // acumulador resgata o primeiro valor do array, soma com o posterior, retorna a soma. O valor de retorno é atribuído para o parâmetro acumulador e valor é todo valor de cada elemento percorrido no array
console.log('resultado:', result);

// outra forma (encadeando os métodos)

// const resultado = num.filter(num => num % 2 === 0).map(num => num * 2).reduce((acumulador, valor) => acumulador + valor);

// console.log(resultado);


