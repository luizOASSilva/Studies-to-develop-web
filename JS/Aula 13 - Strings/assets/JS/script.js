// strings são indexadas (cada letra tem um indíce ou uma posição) e iterável(pode ser percorrido um a um, retornando seus membros de forma sequencial)
let umTexto = "Meu \"nome\""; // para escrever aspas dentro de aspas, pode se usar "\" antes da abertura e fechamento das aspas

console.log(umTexto);

console.log(umTexto[5]) // nesse caso o valor apresentado será "n"

// podemos pegar o indíce da letra referindo ao mesmo como seu valor de posição entre [] e esse apresentará o caráctere
/* Meu "nome"
   0123456789

   [5] = n

   *obs: espaço também é contado como caractere
*/

console.log(umTexto.charAt(5)); // "char" também seleciona por indíce na variável string

console.log(umTexto.concat(', seu nome')); // concatena strings

console.log(umTexto.indexOf('nome')); 

// indexOf aponta para o indíce que inicia a palavra ou caractere procurado

/* Meu "nome"
   0123456789
        nome

    inicia no indíce 5
*/

console.log(umTexto.indexOf('e', 2)); 
// o valor após a vírgula em indexOf indica a partir de qual posição a procura deve começar
// nesse caso o valor retornado é 8 pois a procura começa a partir da posição 2, depois do primeiro "e" de "meu". Caso não houvesse o número 2 para indicar a partir de qual posição iniciar, o valor retornado seria "1" como a seguir:
console.log(umTexto.indexOf('e')); // saída = 1

console.log(umTexto.match(/[a-z]/)); 
// math procura na string utilizando expressões regulares como parâmetro
// nesse caso procura uma letra minúscula na string
// saída = e (primeira letra minúscula encontrada da string) 

console.log(umTexto.search(/[a-z]/)); 
// search também procura na string utilizando expressões regulares como parâmetros
// nesse caso também procura uma letra minúscula na string mas retorna o indíce da letra 
// saída = 1 (indíce da primeira letra minúscula ("m")) 

console.log(umTexto.replace('Meu', 'Seu')); 
// replace substitui a palavra referenciada antes da primeira vírgula pela palavra referenciada depois da vírgula. No caso "Meu", por "Seu"

console.log(umTexto.length);
// lenght retorna o tamanho da string em caracteres. No caso o caractere 0 também é contado

console.log(umTexto.slice(0, 5));
// slice pega uma fatia da string. antes da primeira vírgula em qual indíce o recorte deve começar e após a segunda vírgula onde deve terminar
/* Meu "nome"
   0123456789
   Meu "

   inicia no indice 0 e termina no 5, pegando apenas de 0 a 4 
*/

console.log(umTexto.substring(umTexto.length - 2)); 
// substring procura o indice de um calcúlo feito a partir do tamanho do texto - (menos) um valor inteiro 
/* Meu "nome"
   0123456789
           e"

   inicia no indice 9 e termina no 8
*/

console.log(umTexto.substring()); 
// substring procura o indice de um calcúlo feito a partir do tamanho do texto - (menos) um valor inteiro 
/* Meu "nome"
   0123456789
           e"

   inicia no indice 9 e termina no 8
*/