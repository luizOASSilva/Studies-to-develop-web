const pessoa = {
    nome: 'Luiz',
    idade: 19
};

const p1 = pessoa;
const arr = Object.entries(p1); // Object.entries retorna um array de arrays contendo o nome das propriedades presentes no objeto e seus valores atribuídos
console.log(arr);

const keys = Object.keys(p1);
console.log(keys); // "keys" retorna um array com valores do tipo string contendo o nome das propriedades (keys) presentes no objeto

const val = Object.values(p1);
console.log(val) // "values" retorna um array contendo os valores definidos nas propriedades do objeto 

const desc = Object.getOwnPropertyDescriptor(p1, 'nome'); // "getOwnPropertyDescriptor" recebe dois parâmentros, o objeto que deseja pegar a descrição, e a propriedade para isso. O método retorna as configurações(descriptors) da propriedade passada ao método
console.log(desc);

const multDesc = Object.assign({}, p1, { estaFazendoFaculdade: true }); // "assign" atribui as propriedades de um objeto à outro objeto novo e possibilita a adição de novas propriedades.
// assign tem como par6ametros:
// - um objeto novo (vazio)
// - objeto que deseja trazer as propriedades
// - propriedades novas para esse objeto
console.log(multDesc);

const animal = {
    nome: 'Ayla',
    especie: 'Cachorro'
}

const anim1 = {...animal}; // spread (...nomeDoObjeto) espalha o objeto de uma forma em que ambos não apontem para o mesmo local na memória, desta forma, quando alteramos a sua variável de atribuição, não mexemos no objeto original 
anim1.nome = 'Berenice';
anim1.especie = 'gata';

console.log(anim1);
console.log(animal);

Object.freeze(anim1); // "Object.freeze()" congela o objeto para que o mesmo permaneça com seus valores imutáveis.

anim1.nome = 'Simba';
anim1.especie = 'gato';

console.log(anim1); // mesmo com seus valores alterados, por conta de "Object.freeze", essas alterações não são aplicadas