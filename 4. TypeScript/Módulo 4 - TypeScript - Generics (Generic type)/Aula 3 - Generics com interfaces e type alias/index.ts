interface PessoaProtocolo<T, U = number> { // tipo T precisa ser inferido, se U não for inferido o valor padrão para ele é number
    nome: T;
    sobrenome: T;
    idade: U;
}

type PessoaProtocolo2<T, U = number> = { // type funciona como interface, utilizando a mesma lógica
    nome: T;
    sobrenome: T;
    idade: U;
}

const aluno: PessoaProtocolo<String> = { // se passar apenas um tipo genérico o outro é inferido o padrão colocado na declaração
    nome: 'Luiz',
    sobrenome: 'Silva',
    idade: 30,
}

const aluno2: PessoaProtocolo2<String> = { // se passar apenas um tipo genérico o outro é inferido o padrão colocado na declaração
    nome: 'Luiz',
    sobrenome: 'Silva',
    idade: 30,
}

console.log(aluno);
console.log(aluno2);
 