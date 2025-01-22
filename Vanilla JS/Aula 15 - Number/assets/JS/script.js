let num1 = 0.1;
let num2 = 0.7;

console.log(num1 + num2); // numbers e cálculos em JavaScript são imprecisos 0.7 + 0.1 = deveria ser 1.0 mas em javascript o resultado do cálculo é 0.99999999999999

resultadoAjustado = ((num1 * 100) + (num2 * 100)) / 100; // esse probelma pode ser resolvido dessa forma

console.log(resultadoAjustado);

let numComCasaDecimal = 25.2123

console.log(numComCasaDecimal.toFixed(2)); // toFixed simplifica as casas decimais do número de acordo com o valor específicado na chamada do método
console.log(typeof(numComCasaDecimal.toString()), numComCasaDecimal); // toString transforma o número em decimal. Caso seja adicionado o valor "2" dentro do parentêses ao final da chamada do método, o valor apresentado será em binário
