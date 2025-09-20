// tipos funcionam como um contrato. O tipo assume como o valor de uma variável / função / objeto ou outro se comportará

// type alias é como um apelido para uma tipagem

// utilizamos type para definir o alias

type Idade = number; // criando um tipo cujo o nome é idade e sua atribuição number

type Pessoa = { // outra forma de definir um type alias
    nome: string,
    idade: Idade, // podemos utilizar um tipo dentro do outro
    salario: number,
    corPreferida?: string,
} // podemos definir um tipo como "shape"

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'; // "CorRGB" é o alias para o tipo literal
type CorCMYK = 'Ciano' | 'Magenta' | 'Preto';

type CorPreferida = CorRGB | CorCMYK // podemos fazer union types entre dois type alias

const pessoa: Pessoa = { // definindo o tipo do objeto pessoa como Pessoa(alias)
    // todos os campos obrigatórios devem estar presentes
    nome: 'Luiz',
    idade: 20, // nome e idade devem estar presentes no objeto, pois são obrigatórios
    salario: 10000,
    // corPreferida: 'Laranja' -> errro pois laranja não está em nenhum os types setados com union types para CorPreferida
}

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida) {
    return { ...pessoa, corPreferida: cor}; // recriando objeto e setando corPreferida, que respeito o tipo de CorPreferida
}

console.log(setCorPreferida(pessoa, "Azul"));
console.log(pessoa)