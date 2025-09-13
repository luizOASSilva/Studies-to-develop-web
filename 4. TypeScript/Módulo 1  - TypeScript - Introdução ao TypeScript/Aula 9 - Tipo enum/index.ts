// enum é uma estrutura de dado não ordenada e um tipo exclusivo do TypeScript e utilizamos quando temos mais de uma opção

enum Cores {
    vermelho, // 0
    azul, // 1
    amarelo, // 2
}

console.log(Cores);

console.log(Cores.vermelho) // retorna a posição do enum
console.log(Cores[0]); // acessando a posição 0 do enum


enum CoresDois { // podemos definir os valores de indice do enum
    vermelho = 5, 
    azul = 100, 
    amarelo = 200,
    rosa, // consegue definir o indice automaticamente, pegando o valor anterior
    roxo = "roxo",
    // laranja // não consegue definir o indice pois não entende sequenciais literais
}

console.log(CoresDois.vermelho);
console.log(CoresDois[10]); // TypeScript desconhece o indice da tupla para alguns casos, por isso não gera erro ***** ATENÇÃO *****
console.log(CoresDois.roxo)

enum CoresDois {
    pretudo = 1,
}

console.log(CoresDois); // enum faz merge e junta dois enums de nomes iguais em um. Antes mesmo de ser atribuído outro enum

function escolhaCores (cor: Cores): void {
    console.log(Cores[cor]);
}

escolhaCores(Cores.vermelho);

escolhaCores(Cores.azul) // gerá erro, pois o valor não existe na tipagem de enum
