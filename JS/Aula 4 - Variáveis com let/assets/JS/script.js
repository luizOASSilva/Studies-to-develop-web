var nome = 'Luiz'; // definindo uma variável. Variável é uma locação de memória que armazena um valor durante a execução do código

/*
console.log('Luiz casou-se com Helena');
console.log('Milena é irmã de Luiz');
console.log('Os pais de luiz tsão viajando');

Reescrevendo o texto anterior utilizando a variável
*/

console.log(nome, ' casou-se com Helena');
console.log('Milena é irmã de', nome);
console.log('Os pais de', nome, 'estão viajando');

nome = 'Otávio'; // a variável sendo modificada, o fragmento do texto também é modificado junto a frase

// o nome agora é Otávio
console.log(nome, 'casou-se com Helena');
console.log('Milena é irmã de', nome);
console.log('Os pais de', nome, 'estão viajando');

let sobrenome; // uma variável também pode ser iniciada sem valor

console.log(sobrenome); // saída: undefined, Ou seja, valor não definido

sobrenome = 'Silva'; // o valor da variável pode ser definida posterior a sua declaração

console.log(sobrenome); // saída: Silva

/*  Algumas observações
*   - let nome; -> uma variável let não pode ser declarada novamente
*   - não se pode criar variáveis com palavras reservadas
*   ex: let let | let if
*   - variáveis precisam ter nomes significativos e explicativos para fácil entendimento
*   ex: prefira nome = 'João' ao invés de n = João
*   - não se pode começar o nome de uma variável com um número
*   - nome das variáveis não podem conter espaços ou traços. Prefira Camel case  ou Snake case
*   ex: let primeiroNome (Camel case) ou let primeiro_nome (Snake case)
*   - variáveis em JavaScript são case-sensitive. Ou seja, letras maiúsculas importam
*   ex: let nomeCliente = 'Luiz' não é o mesmo que nomecliente = 'luiz'
*   - sempre prefira let ao invés de var, pois var pode gerar complicações desnecessárias
*/      