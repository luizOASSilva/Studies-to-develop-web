const HomeModel = require('../models/HomeModel');

HomeModel.create({ // create retorna uma promise que pode ser resolvida com .then
    titulo: 'Título de teste 2', // criando um documento e setando título ao Schema
    descricao: 'Uma descricao de teste 2' // setando valor na descrição do Schema 
}) // "create" cria um documento do Schema criado e exportado de models
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

HomeModel.find() // método find retorna os dados inseridos no banco de dados. "find()" também retorna uma promise que será resolvida com "then()"
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.home = (req, res) => {
    res.render('index');
};
