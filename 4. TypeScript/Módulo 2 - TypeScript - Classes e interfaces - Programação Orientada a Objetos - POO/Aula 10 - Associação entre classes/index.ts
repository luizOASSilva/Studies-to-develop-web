export class Escritor {
    private _ferramenta: Ferramenta | null = null;

    constructor(private _nome: string) {}

    get nome(): string {
        return this._nome;
    }
 
    set ferramenta(ferramenta: Ferramenta) {
        this._ferramenta = ferramenta;
    }

    get ferramenta(): Ferramenta | null {
        return this._ferramenta
    }

    escrever(): void {
        if(this.ferramenta === null) {
            console.log('Não posso escrever sem ferramenta');
            return;
        }
        this.ferramenta.escrever();
    }
}

export abstract class Ferramenta {
    constructor(private _nome: string) {}
    abstract escrever(): void;

    get nome(): string {
        return this._nome;
    }
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está escrevendo...`);
    }
}

export class Lapis extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está escrevendo...`)
    }
}

const escritor = new Escritor('Luiz');
const caneta = new Caneta('Bic');
const lapis = new Lapis('Faber-Castel');

// Todas as classes são independentes porém podemos fazer uma associação entre elas

console.log(escritor.nome);
console.log(caneta.nome);
console.log(lapis.nome);

escritor.escrever(); // escritor não possui uma ferramenta

escritor.ferramenta = caneta; // associando a ferramenta caneta ao escritor

escritor.escrever();