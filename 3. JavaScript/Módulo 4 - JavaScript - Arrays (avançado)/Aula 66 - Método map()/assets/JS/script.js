// map mapeia os valores de um array assim como filter, porém diferente dele, modifica os valores do array para a criação de um novo
// map sempre terá o mesmo tamanho do array original. Diferente de filter()

// suponha que você precise retornar um array com números dobrados

const num = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const numDobrado = num.map(val => val * 2);
console.log(numDobrado);

// exemplo real

// para cada elemento:
// retorne apenas uma string com o nome da pessoa
// remova apenas a chave "nome" do objeto
// adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 19 },
    { nome: 'Helena', idade: 18 },
    { nome: 'Clarisse', idade: 48 },
    { nome: 'Márcio', idade: 58 },
    { nome: 'Milena', idade: 29 },
    { nome: 'Matheus', idade: 27 }, 
];

const res1 = pessoas.map(obj => obj.nome);
console.log(res1);

const res2 = pessoas.map(obj => delete obj.nome); // ou ({ idade: obj.idade }) (retornando um objeto novo com apenas a propriedade idade)
console.log(res2);

const res3 = pessoas.map((obj, indice) => {
    obj.id = (indice + 1);
    return obj;
});
console.log(res3);
console.log(pessoas); // objetos são valores por referência. Por isso, o objeto original é modificado

// como não modificar o array original

const pessoas2 = [
    { nome: 'Luiz', idade: 19 },
    { nome: 'Helena', idade: 18 },
    { nome: 'Clarisse', idade: 48 },
    { nome: 'Márcio', idade: 58 },
    { nome: 'Milena', idade: 29 },
    { nome: 'Matheus', idade: 27 }, 
];

const res4 = pessoas2.map((obj, indice) => { // para resolver isso
    const newObj = {...obj} // cria um novo objeto que espalha(copia) o valor do argumento obj
    newObj.id = indice; // cria a popriedade id no objeto "newObj"
    return newObj; // retorna o objeto criado
});
console.log(pessoas2);
console.log(res4);


const res5 = pessoas2.map(obj => {
    const newObj2 = {...obj}; // cria um novo objeto que espalha(copia) o valor do argumento obj
    delete newObj2.nome; // deleta a popriedade nome no objeto "newObj"
    return newObj2; // retorna o objeto criado
    
}); // ou ({ idade: obj.idade }) (retornando um objeto novo com apenas a propriedade idade)
console.log(pessoas2);
console.log(res5);

// **obs: nenhum valor dos arrays originais é mudado
