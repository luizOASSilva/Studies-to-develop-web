// tipo void é um tipo para respresentar valores vazios ou sem retorno

function semRetorno(...args: string[]): void { // "void" significa uma função sem retorno
    // ... cria uma cópia do valor passado por argumento
    // se deixarmos apenas o argumento, o tipo não será inferido automaticamente. Precisamos pasar que rest operator é do tipo array
    console.log(args.join(' '));
}

semRetorno('Luiz', 'Silva');

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Silva',

    exibirNome(): void { // criando um método no objeto pessoa sem retorno(void)
        console.log(this.nome + '' + this.sobrenome)
    }
}

pessoa.exibirNome();

