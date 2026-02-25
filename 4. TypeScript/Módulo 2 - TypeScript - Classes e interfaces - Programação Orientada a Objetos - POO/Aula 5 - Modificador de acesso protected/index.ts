export class Empresa {
    readonly nome: string;
    protected /* private -> geraria erro na subclasse colaborador, pois private não permite acesso por subclasses à atributos da super classe */ readonly colaboradores: Colaborador[] = []; // o modificador de acesso protected permite que o atributo possa ser acessado por subclasses, ou pela própria classe. Porém não fora de seu escopo

    constructor(nome: string) {
        this.nome = nome;
    }
}

export class Colaborador {
    constructor(
        readonly nome: string,
    ){}
}

export class Udemy extends Empresa {
    constructor() {
        super('Udemy')
    }

    pop(): Colaborador  | null{
        const colaborador = this.colaboradores.pop(); // isso só é possível pois colaboradores na super classe é protected. Se seu modificador de acesso fosse private, não poderia ser acessado pela subclasse
        
        return colaborador ? colaborador : null;
    }
}

