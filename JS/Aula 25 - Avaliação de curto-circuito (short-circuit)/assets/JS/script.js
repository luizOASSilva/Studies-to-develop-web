//a  avaliação de curto-circuito(short-circuit) é uma estrtégia de avaliação de operadores lógicos que evita a avaliação de um dos operandos quando o resultado já está definido

// avaliação curto-cicuito(short-circuit) do operador &&(AND)

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

function falaOi () {
    return 'Oi';
}

let vaiExecutar = false;

console.log(vaiExecutar && falaOi()); // saída = false (realizado o short-circuit)
// retorna "false" por que utilizamos um dos falsy values e como o operador necessita das duas operações retornando true para que seu valor seja verdadeiro, o valor retornado é false

vaiExecutar = 'Luiz';

console.log(vaiExecutar && falaOi()); // saída = "Oi"
// retorna "oi" pois é o último valor "true" da expressão que retorna true e então realiza a função 

// avaliação de curto-circuito(short-cicuit) do operado ||(OR)

console.log(0 || false || null || 'Luiz Otávio' || true); // retorna "Luiz Otavio" pois ||(or) necessita de apenas um valor verdadeiro

let corUsuario = null;
const corPadrao = corUsuario || 'white'; // nesse caso a cor padrão será a primeira expressão "true" da operação

console.log(corPadrao);

corUsuario = 'black'; // usuário escolhe a cor preta
const corPadrao2 = corUsuario || 'white';

console.log(corPadrao2); // por corUsuario deixar de ser um falsy value(valor falso), a operação procura o primeiro valor true necessário para executar a operação lógica || (OR) e encontra a variável cor padrão que deixou de ser null. Desta maneira retorna o seu valor "black"

const a = 0;
const b = NaN;
const c = false;
const d = undefined;

console.log(a || b || c || d) // quando todas as expressões forem falsas, ao usar o operador lógico "&&", o retorno será do último valor avaliado como falso. No caso "undefined"


