/*

--operadores de comparação--

> maior que
>= maior ou igual a
< menor que
<= menor ou igual a
== igualdade (checa valor)
=== igualdade estrita (checa valor e tipo)
!= diferente (checa valor)
!== diferente estrito (checa valor e tipo)

*/ 

const comparacao = 10 > 5 // "10 é maior que 5" = true
// retorna "true", pois a comparação de "10 é maior que 5" é verdadeira
console.log(comparacao); // saída "true"

let comparacao2 = 10 >= 5 // "10 é maior ou igual a 5" = true
// maior ou igual realiza duas comparações: primeiro se um número é maior que o outro e depois se ambos são iguais, caso qualquer uma das comparações seja verdadeira, o resultado é true
comparacao2 = 10 >= 10; // 10 não é maior que 10, porém é igual. Desta maneira a variável deve receber o valor de "true", por se tratar de uma expressão verdadeira
console.log(comparacao2);

const comparacao3 = 10 < 5; // "10 é menor que 5" = false
// retorna "false", pois a comparação de "10 é menor que 5" é falsa

let comparacao4= 10 <= 11; // "10 é menor ou igual a 11" = true
// menor ou igual realiza duas comparações: primeiro se um número é menor que o outro e depois se ambos são iguais, caso qualquer uma das comparações seja verdadeira, o resultado é true
comparacao4 = 10 <= 10; // 10 não é menor que 10, porém é igual. Desta maneira a variável deve receber o valor de "true", por se tratar de uma expressão verdadeira
console.log(comparacao3);

// todos os operadores de comparação podem ser utilizados para comparar também duas variáveis

const num1 = 10;
const num2 = 10;

resultado = num1 == num2; // operador de "igual a". Nesse caso o retorno é true(verdadeiro), pois 10 é o mesmo valor que 10

console.log(resultado);

// **Obs "==" não é confiável, pois não leva em consideração o tipo de variável

const num3 = '10'; // tipo string
const num4 = 10; // tipo number

console.log(num3 == num4); // nesse caso ele deduz a variável string como um tipo number para realizar a operação e por isso retorna true. sendo que 10 do tipo string não é o mesmo que 10 do tipo number e por isso deveria retornar false
// por este motivo não deve ser utilizado

// para correção disso, surgiu o operador "===", que leva em consideração o tipo da variável

console.log(num3 === num4) // nesse caso o retorno é false, pois o JavaScript através do operador "===" consegue identificar que string não é o mesmo que number

const num5 = 20;
const num6 = 20;

resultado = num1 != num2; // operador de "diferente". Nesse caso o retorno é false(falso), pois 10 é o mesmo valor que 10, n/ão sendo diferentes

console.log(resultado);

// **Obs assim como "==", "!=" não é confiável, pois não leva em consideração o tipo de variável

const num7 = '10'; // tipo string
const num8 = 10; // tipo number

console.log(num3 != num4); // nesse caso ele deduz a variável string como um tipo number para realizar a operação e por isso retorna false. Sendo que 10 do tipo string é diferente de 10 do tipo number e por isso deveria retornar true
// por este motivo não deve ser utilizado

// para correção disso, surgiu o operador "!==", que leva em consideração o tipo da variável

console.log(num3 !== num4) // nesse caso o retorno é true, pois o JavaScript através do operador "!==" consegue identificar que string não é o mesmo que number, assim percebendo que ambos são diferentes
