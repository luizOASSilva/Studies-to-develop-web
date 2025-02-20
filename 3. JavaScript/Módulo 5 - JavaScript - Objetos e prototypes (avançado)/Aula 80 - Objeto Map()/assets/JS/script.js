// Map() contém pares chave-valor e lembra a ordem de inserção original das chaves.

const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Helena' },
    { id: 1, nome: 'Milena' },
];

const novasPessoas = new Map(); // cria um objeto "Map()" que irá lembrar a ordem das chaves no momento de sua inserção

for(const {id, nome} of pessoas) {
    novasPessoas.set(id, nome); // "Map.set()" adiciona chaves com valores ao objeto
}

console.log(novasPessoas);

const map1 = new Map(); // instanciando "Map()"

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1);

console.log(map1.get('a')); // "Map.get()" retorna o valor atribuído à chave procurada

console.log(map1.size); // "Map.size" retorna o tamanho do objeto de acordo com a quantidade de chaves

map1.delete('b'); // "Map.delete()" deleta uma chave

console.log(map1.size);
