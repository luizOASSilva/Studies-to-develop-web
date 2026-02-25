export class Empresa {
    private readonly colaboradores: Colaborador[] = []; // quando dizemos que um atributo é privado, estamos dizendo que ele só poe ser acessado de dentro de sua própria classe
    public readonly nome: string; // atributos com modificador de acesso público, estão disponíveis globalmente

    constructor(nome: string) {
        this.nome = nome;
    }

    /* public */ adicionaColaborador(colaborador: Colaborador) { // mesmo sendo privado, não significa que não podemos manipulá-los de dentro da classe. O nome disso e encapsulamento(modificação controlada por meio de métodos)
        this.colaboradores.push(colaborador); // readonly diz que o valor não pode ser alterado, mas permite a utilização de métodos como push para atribuição de valores
    } // quando não definimos um modificador de acesso, por padrão, o valor é public
    
}

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}

// private é um modificador de acesso que permite tornar métodos e atributos privados e acessados somente dentro da função de seu escopo, isso é o encapsulamento (fornecimento de métodos para manipulação de atributos privados)

const empresa1 = new Empresa('Fatec');
const colaborador = new Colaborador('Luiz', 'Silva');
empresa1.adicionaColaborador(colaborador);

console.log(empresa1)
