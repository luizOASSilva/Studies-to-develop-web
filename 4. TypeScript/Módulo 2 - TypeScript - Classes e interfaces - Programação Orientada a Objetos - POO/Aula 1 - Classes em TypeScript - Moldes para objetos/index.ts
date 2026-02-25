export class Empresa { // definindo e passando valor em sua criação
    public readonly nome: string = 'Luiz'; // public é redundante, é um valor padrão se não adicionado
}

export class Empresa2 { // passando valor para a classe por meio do construtor
    public readonly nome: string;
    
    constructor(nome: string){
        this.nome = 'Luiz'; // mesmo com readonly, só é possível essa atribuição de valor por ser a sua linha de inicialização
    }
}

const empresa1 = new Empresa2('Udemy');
console.log(empresa1);
console.log(empresa1.nome);

// empresa1.nome = 'Júlia'; -> não é possivel reatribuir valores a atributos definidos como readonly

export class Empresa3 {
    private readonly colaboradores: Colaborador[] = []; // iniciando o array diretamente com valor vazio
    protected readonly cnpj: string;

    constructor(cnpj: string){ // criano um construtor para definir valor ao cnpj
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void { // criando um método da classe que permite adicionar valor ao array de colaboradores e retorna void
        this.colaboradores.push(colaborador); // push é possível em array readonly
    }

    mostrarColaboradores(): void {
        for(const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Colaborador {
    constructor(public readonly nome: string, readonly sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
} // classes também funcionam como tipos

const empresa3 = new Empresa3('11.111.1111/001-11');

const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Joao', 'Jose');
const colaborador3 = new Colaborador('Julia', 'Isabelly');

empresa3.adicionaColaborador(colaborador1); // adicionando colaboradores a empresa
empresa3.adicionaColaborador(colaborador2);
empresa3.adicionaColaborador(colaborador3);

empresa3.mostrarColaboradores();