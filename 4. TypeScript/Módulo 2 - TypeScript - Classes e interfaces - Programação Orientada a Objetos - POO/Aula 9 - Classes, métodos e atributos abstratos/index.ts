export abstract class Personagem { // classes abstract(abstrata) são classes que não permitem a criação de uma instância diretamente, apenas a criação de subclasses
    protected abstract emoji: string; // quando criamos um atributo com abstract, forçamos as subclasses a serem idênticas
    
    constructor(
        protected nome: String, 
        protected ataque: number,
        protected vida: number
    ){}

    atacar(personagem: Personagem): void {
        personagem.perderVida(this.ataque);
    }   

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
    }

    bordao(): void {
        console.log('BORDAO')
    }
}

export class Guerreira extends Personagem {
    protected emoji = '\u{00f0}';

    bordao(): void {
        console.log(this.emoji);
        console.log('GUERRRREEEEEEIIIIRA AO ATAQUEEEEEEEEEEE');
    }
}

export class Monstro extends Personagem {
    protected emoji = '\u{1F9DF}';

    bordao(): void {
        console.log(this.emoji);
        console.log('MONSSSSSTTTTTEEEERRRRRR');
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

console.log(guerreira);
console.log(monstro);

// abstract é uma classe que não pode ser diretamente instanciada, apenas por meio de subclasses
