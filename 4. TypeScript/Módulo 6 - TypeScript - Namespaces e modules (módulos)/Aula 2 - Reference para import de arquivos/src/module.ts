namespace MeuNamespace { // namespace cria um espaço de código onde tudo fora dele é inacessível. Sendo acessível apenas em escopo local
    console.log('Luiz');

    export const nomeDoNameSpace = 'Luiz';

    export class PessoaDoNamespace { // se eu der um export, posso utilizar fora do namespace
        constructor(public nome: string) {}
    }

    const pessoa = new PessoaDoNamespace('Luiz');

    export namespace OutroNameSpace {
        export const nomeDoNameSpace = 'Nome do outro namespace'; // tem o mesmo nome, não verifica escopo e por isso permite criação de nome igual
    }
}

// const pessoa = new PessoaDoNamespace('Luiz'); -> gera erro

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Luiz'); // para utilizar a função exportada de dentro do namespace, precisamos chamar seu nome

console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNameSpace); // funciona como objetivo
console.log(MeuNamespace.OutroNameSpace.nomeDoNameSpace) // posso acessar e empilhar namespaces

const constDoNamespace = "Valor da const do namespace";