const objeto1: Record<string, string> = { // record é um genérico para objeto onde dizemosno primeiro valor entre <> o tipo do atributo e o tipo do conteúdo do atributo
    nome: 'Luiz',
    sobrenome: 'Silva',
    // idade: 30, Gera erro, pois o valor do atributo idade é number, e o valor decrito entre <> é string
};

type PessoaProtocol = { // todos os atributos são opcionais. Podem ou não existir
    nome?: string;
    sobrenome?: string;
    idade?: string;
};

const objeto2: PessoaProtocol = {
    nome: 'Luiz',
    sobrenome: 'Silva',
}

// required
type PessoaRequired = Required<PessoaProtocol>; // required transforma todos os argumentos opcionais de um type em obrigatório

const objeto3: PessoaRequired = {
    nome: 'Luiz',
    sobrenome: 'Silva',
    idade: '20',
}

// partial
type PessoaPartial = Partial<PessoaRequired>; // partial torna todos os atributos do tipo não obrigatórios. Ou seja, faz o contrário de required, os tornando opcional

const objeto4: PessoaPartial = { // não preciso de todos os atributos
    nome: 'Luiz',
}

// readonly
type PessoaReadonly = Readonly<PessoaRequired>; // transforma o tipo em não modificável, coloca o prefixo readonly em todos os atributos do tipo

const objeto5: PessoaReadonly = {
    nome: 'Luiz',
    sobrenome: 'Silva',
    idade: '20',
}

// objeto5.nome = 'Teste'; por ter sido transformado em readonly, o valor nãopode ser modificado

// pick 
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>; // pega os atributos selecionados de um tipo e atribui a um novo

const objeto6: PessoaPick = {
    nome: 'Luiz',
    sobrenome: 'Siva',
}

// extract e exclude
type abc = 'a' | 'b' | 'c';
type cde = 'c' | 'd' | 'e';

type tipoExclude = Exclude<abc, cde>; // computa os tipos que estão no primeiro parâmetro e que não estão no outro (a, b)
type tipoExtract = Extract<abc, cde>; // computa os tipos que estão no primeiro parâmetro e no segundo (c)

// exemplo

type AccountMongo = {
    _id: string,
    name: string,
    age: number,
};

type AccountApi = {
    id: string,
    name: string,
    age: number,
}

const accountMongo: AccountMongo = {
    _id: 'adaasda2a2a32z23-23132-sada',
    name: 'Luiz',
    age: 20,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// fazendo de uma forma mais otimizada 

type accountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string;
};