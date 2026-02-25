// type guard é garantir que o tipo sej idêntico ao setado. Refinamos o tipo com estrutura de decisão

function add(a: unknown, b: unknown) {
    return typeof a === 'number' && typeof b === 'number'? a + b : `${a}${b}`;
}

console.log(add(1,5));
console.log(add('a', 'b'));

type Pessoa = { nome: string };
type Animal = { cor: string };
type PessoaOuAnimal = Pessoa | Animal;

class Aluno implements Pessoa {
    constructor(public nome: string) {};
}

function mostraNome(obj: PessoaOuAnimal): void {
    // if ('nome' in obj) console.log(obj.nome);
    if(obj instanceof Aluno) console.log(obj.nome); // refinando o tipo, nome só existem em Pessoa não em Animal. Quando perguntamos se é uma instância de Aluno ele retorna true
}

mostraNome(new Aluno('Luiz'));