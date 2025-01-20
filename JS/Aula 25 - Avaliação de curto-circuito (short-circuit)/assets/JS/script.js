//a  avaliação de curto-circuito(short-circuit) é uma estrtégia de avaliação de operadores lógicos que evita a avaliação de um dos operandos quando o resultado já está definido

// por exemplo

console.log('Luiz' && 0 && 'Helena'); // o retorno é 0, pois a engine do JavaScript encontrou o valor "false" da operação "&&". Operação essa que necessita de todas as expressões "true"

console.log('Luiz' && 1 && 'Helena'); // o retorno é "helena", pois por ser verdadeiro, a engine do JavaScript encontrou o último valor da operação "&&". Operação essa que necessita de todas as expressões "true"

console.log('Luiz' && 1 && NaN); // o retorno é "NaN", pois assim como o "0" anterior, a engine do JavaScript encontrou o último valor "false" da operação "&&". Operação essa que necessita de todas as expressões "true"

/*

    valores avaliados em false(falsy values):
    1. false
    2. 0
    3. '' ou "" ou `` -> strings vazias
    4. null e undefined
    5. NaN

*/