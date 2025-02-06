// break e continue são instruções que permitem maior controle estruturas de repetição(for, for inf, for of, while e do while)

/*

break:
- sai do loop de repetição quando uma condição específica é atendida 
- encerra a instrução de iteração ou instrução switch mais próxima 
- interrompe o laço e continua executando o código após o loop 

continue 
- inicia uma nova iteração da instrução de iteração mais próxima
- pula a iteração atual e continua com a próxima
- volta ao início do laço

*/

const numeros = [1, 2, 3, 4, 5]; // vetor de números

for (let numero of numeros) { // suponha que você não quer executar o trecho do código "console.log()" quando "numero" for igual a "2"
    if(numero === 2) { // quando o valor de "numero"for "2", o programa acessa o bloco de código if, se não, continua o laço
        console.log('Número 2 encontrado, pulando para o próximo laço')
        continue; // (continuar) quando acessado, ignora instruções abaixo de continue. Quando isso ocorre, o próximo looping é executado
    }
    console.log(numero)

    // agora suponha que ao chegar no número "4" você queira que a estrutura de repetição "for" pare de executar

    if(numero === 4){ // verifica se "numero" é igual a 4, caso seja executa o bloco da estrutura condicional "if"
        console.log('Número 7 encontrado, saindo do laço');
        break; // (quebrar), 
    }
}

// continue e break funcionam para qualquer laço de repetição

for (let i in numeros) {
    if (numeros[i] <= 3) { // verifica se o valor da variável "número" no índice no valor de "i" é menor igual a 3, caso verdadeiro executa o bloco "if"
        console.log('Número pulado');
        continue; // ignora todo número menor ou igual a "3"
    } 
    console.log(numeros[i]);
}

let i = 0;

while (i < numeros.length) { // enquanto a variável "i" for menor que o número de elementos dentro do array "numeros" executa o bloco
    if(i >= 3) { // se "i" for maior ou igual a 3, o bloco de instrução condicional é executado
        i++;
        console.log('pulei estes números por conta do "continue"');
        continue;
    }
    console.log(numeros[i]);
    i++;
} // ao criar um while com break e continue, deve se atentar a incrementação da variável de controle. Para não ocorrer laços infinitos.