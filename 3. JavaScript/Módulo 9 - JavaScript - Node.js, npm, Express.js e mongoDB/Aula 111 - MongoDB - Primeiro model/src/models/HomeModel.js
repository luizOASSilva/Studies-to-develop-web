// models possuem em sua nomenclatura a primeira letra maiúscula, pois se tratam de classes
// mongoDB é um banco de dados noSQL, são baseados em documentos, não possuem modelagem fixa. Suas vantagens são: são eficiente, lidam com grandes volumes de dados e possui fleximilidade nos seus Schemas

const moongose = require('mongoose');

const HomeSchema = new moongose.Schema({ // homeSchema se refere a modelagem dos dadoas a serem enviados ao MongoDB
    // "moongose.Schema" é uma classe usada no mongoose usda para modelar dados
    titulo: { type: String, required: true}, // criando a modelagem, podemos enviar um objeto ao rótulo do dado e configurar mais de um preset
    descricao: String
});

const homeModel = moongose.model('Home', HomeSchema); // criando um model

module.exports = homeModel;
