const cpf = 51159886822; // essa variável só estará disponível no arquivo "modulo3", pois a mesma não foi exportada

export class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    get imc() {
        return this.peso / (this.altura * this.altura);
    }

    apresentaImc() {
        console.log(`${this.nome}, seu IMC É: ${this.imc}`);
    }
}

export default function funcaoDefault() { // quando exportamos uma função padrão, ela é importada como componente principal do módulo
    // **OBS: só pode haver uma exportação default por módulo criado
    console.log('Esta é uma função default');
}
