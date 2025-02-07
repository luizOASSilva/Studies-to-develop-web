function recursiva(max) { // funções recursivas funcionam como laços de repetição
    // funções recursivas necessitam de uma condição para interromper sua execução. Caso contrário, são executadas infinitamente
    if(max >= 10) { // verifica se o valor de "max" é maior que 10
        return; // caso verdadeiro, aborta a função
    }
    max++; // soma mais um no parâmetro "max"
    console.log(max); // 
    recursiva(max); // chama a função novamente mas agora com max valendo o valor acrescido na última execução
}

recursiva(0); // inicia a função recursiva com o valor 0

// **obs: funções recursivas são funções que chamam a si mesma até encontrarem uma instrução de parar. Essa técnica é chamada de recursão