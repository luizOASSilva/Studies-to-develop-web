
const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Helena' },
    { id: 1, nome: 'Milena' },
];

const novasPessoas = {};

for(const pessoa of pessoas) { 
    const {id, nome} = pessoa
    console.log(id);
    console.log(nome);
}
