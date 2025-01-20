// hard coding é uma prática de desenvolvimento onde o dado é inserido diretamente no código fonte do programa sem influência externa

/*
operadores lógicos

&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

console.log(true && true); // no operador lógico "AND" as duas expressões precisam retornar true 
// saída = true
console.log(true && false); // nesse caso o retorno da operação é false pois apesar de uma parte da expressão ser true, a outra é false e para que resulte em true, ambos precisam ser true

console.log(true || false); // para o operador "||" retornar true, apenas uma ou todas as expressões precisam ser verdadeiras
// saída = true

// na prática

const usuario = 'luiz';
const senha = 12345;

//                 true        &&       true     =  true
let login = usuario === 'luiz' && senha === 12345;

console.log(login);

//              true                false     =   false
login = usuario === 'luiz' && senha === 212304;
console.log(login);

console.log(true); // saída = true
console.log(!true); // quando usamos o operador '!', estamos negando a operação que vem a seguir. No caso "true" se tornará false 
console.log(!!true); // o mesmo vale para seu uso duplo, onde true vira false e false já invertido vira true