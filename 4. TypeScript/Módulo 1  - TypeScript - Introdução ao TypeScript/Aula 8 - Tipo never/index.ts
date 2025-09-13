// never é o tipo que indica que nunca haverá rtorno, por exemplo em um laço infinito ou um erro

function criaErrro() : never { // especifico que o erro não retornará nada, util em desenvolvimento em conjunto com outros devs
    // ": void" também é possível, mas menos descritivo a nível de desenvolvimento
    throw new Error('Erro');
}

criaErrro();