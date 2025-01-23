const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Silva',
    idade: 19,
    endereco : {
        rua: 'Padre Lincoln Leme',
        numero: 757
    },
    estaTrabalhando: false,
    estaEstudando: true
};

// const nome = pessoa.nome; **obs para atribuir o valor de uma propriedade do objeto usamos o nome do objeto + "." + o nome da propriedade
// const sobrenome = pessoa.sobrenome; **obs: para atribuir cada valor, seria necessário realizar essa tarefa manualmente repetidas vezes para cada propriedade
// console.log(nome, sobrenome);

// assim como no array, para facilitar esse processo, foi criado a atribuição via desestruturação do objeto. Por exemplo:

const { nome, sobrenome, idade, ...resto } = pessoa; // atribuição via desestruturação do objeto. A variável entre {} (chaves) pode conter o mesmo nome da propriedade, o que tornará automática a extração do valor
// assim como array, é possível pegar o restante das propriedades de um objeto e atribuí-los à uma variável utilizando o operador "rest" (...) seguido do nome da variável

console.log(nome, sobrenome, idade, resto); // saída = luiz silva 19 {endereco: { rua: 'Padre Lincoln Leme', numero: 757 }, estaTrabalhando: false, estaEstudando: true}

const { endereco: {rua, numero}, endereco } = pessoa; // podemos também extrair um objeto dentro de dentro de um objeto via desestruturação. E desetruturar esse objeto, especificando a propriedade que dá referência ao objeto e dentro de chaves suas propriedades desejadas

console.log(rua, numero, endereco); // saída = Padre Lincoln Leme 757 { rua: 'Padre Lincoln Leme', numero: 757 }

// uma atribuição via desestruturação em objeto pode também ocorrer separadamente da sua declaração. Por Exemplo

let a, b;

({ a, b } = { a: 1, b: 2 }); // variáveis "a" e "b" atribuídas separadamente da sua declaração

console.log(a, b); 

const texto = {
    texto1: 'Este',
    texto2: 'Aquele'
};

const { texto1: p1, texto2: p2} = texto; // é possível também criar uma variável de nome diferente da propriedade da qual será extraído o valor. Para isso coloca-se o nome da propriedade (texto1), por exemplo, em seguida ":" e por fim o novo nome da variável quen receberá o valor (p1)

console.log(p1, p2); // saída = este aquele
