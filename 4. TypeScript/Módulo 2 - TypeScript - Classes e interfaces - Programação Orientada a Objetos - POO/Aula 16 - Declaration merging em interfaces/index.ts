interface Pessoa {
    nome: string;
}

interface Pessoa { // interfaces fazem declaration merging se encontram outras interfaces com o mesmo nome. Pessoa agora tem o atributo obrigatório nome e sobrenome após se unirem.
    sobrenome: string;
}

/* TYPE NÃO FAZ MERGE, GERARÁ ERRO

type Aluno = {
    ra: number;
}

type Alunp = {
    nota: number;
}

*/

interface Pessoa {
    readonly idade?: number; // Quando adicionamos a interrogação dizemos que a propriedade pode receber o valor undefined e se existir, por conta de readonly, n será possível alterá-la
}

const pessoa: Pessoa = { // nome e sobrenome são obrigatórios seguindo a interface "Pessoa"
    nome: 'Luiz',
    sobrenome: 'Otávio'
}