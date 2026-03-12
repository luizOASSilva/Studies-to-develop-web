const propriedadesObrigatorias: string[] = [];

function Obrigatorio(classPrototype: any, nome: string): void {
    propriedadesObrigatorias.push(nome); // só anota o nome
}

class Formulario {
    @Obrigatorio
    nome: string;

    @Obrigatorio
    email: string;

    telefone: string; // sem decorator — não é obrigatório

    constructor(nome: string, email: string, telefone: string) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

console.log(propriedadesObrigatorias);
// ['nome', 'email']