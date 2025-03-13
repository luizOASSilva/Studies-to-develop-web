// router é um gerenciador / manipulador de rotas do NodeJS. Serve para criar rotas modulares e montáveis. A instância de Router é um middleware e sistema de roteamento completo
// MVC -> Model-View -Controller é uma arquitetura de projetos que separa as entradas, processamentos e saída de dados. O MVC tem o papel de separar as informações em camadas, tornando a manipulação de dados mais segura, rápida e organizada
// Model -> processa os dados recebidos do controller e decide o que fará com eles
// View -> Apresenta os dados, informações e entre outros
// Controller -> envia os dados ao model para ser processado

const express = require('express');
const route = express.Router(); // instânciando "Router()"
const homeController = require('./controllers/homeController'); // importando por require o controller da home, nele está a função que será atribuída ao get
const aboutController = require('./controllers/aboutController');

// rotas da home
route.get('/', homeController.home); // atreibuindo ao get da rota "/" a função importada de home controller, chamada "home"
route.post('/', homeController.trataPost); // atreibuindo ao post da rota "/" a função importada de home controller, chamada "trataPost"

//rotas do sobre
route.get('/about', aboutController.about); // atreibuindo ao post da rota "/" a função importada de home controller, chamada "trataPost"

module.exports = route; // exportando route
