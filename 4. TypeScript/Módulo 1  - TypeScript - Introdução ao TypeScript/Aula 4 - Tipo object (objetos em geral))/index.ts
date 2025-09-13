const objA = { // TypeScript já inferiu o tipo do objeto
    chaveA: 'Valor A',
    chaveB: 'Valor B'
};

objA.chaveA = 'Outro valor'; // podemos alterar o valor das propriedades do objeto

// chaveC não existe no tipo de objA
objA.chaveC = 'novaChave'; // uma vez que o tipo foi inferido, não podemos modificalo adicionando valores, propriedades e etc

const objB: Record<string, unknown> = { // Podemos utilizar Record<string, unknown> para tipar um objeto, mas o objeto não seria mapeado pelo TypeScript, gerando um problema de segurança
    // tipo "unknown" é ainda mais abrangente que "any"
    chaveA: 'Valor A',
    chaveB: 'Valor B'
};

objB.chaveC = 'Valor C'; // agora o TypeScript não conhece o formato do objeto

// outra forma 

const objC: {
    chaveA: string, 
    chaveB: string, 
    [key: string]: unknown // chamado index signature. Permite definir o tipo antes mesmo do objeto conhecer seu valor ou tipo antecipadamente
} = { // Podemos utilizar Record<string, unknown> para tipar um objeto, mas o objeto não seria mapeado pelo TypeScript, gerando um problema de segurança
    chaveA: 'Valor A',
    chaveB: 'Valor B'
};

objC.chaveC = 'Valor C' // o TypeScript conhece o formato do objeto e consegue adicionar uma propriedade, porém não conhece a nova propriedade adicionada

// uma das formas de fazer tipagem de objeto é tipando em sua criação e colocando valores a serem adicionados posteriormente como opcionais com "?"

const objD: {chaveA: string, chaveB: string, chaveC?: string} = { // Podemos utilizar Record<string, unknown> para tipar um objeto, mas o objeto não seria mapeado pelo TypeScript, gerando um problema de segurança
    // tipo "unknown" é ainda mais abrangente que "any"
    chaveA: 'Valor A',
    chaveB: 'Valor B'
};

objD.chaveC = 'Agora consigo criar outra chave para o objeto';

const objE: {readonly chaveA: string, chaveB: string} = { // quando definimos "readonly" em sua tipagem, estamos dizendo que seu valor não pode ser modificado
    chaveA: 'Valor A',
    chaveB: 'Valor B'
};

objE.chaveA = 'teste'; // não podemos mais alterar o valor nem o seu tipo



