const express = require('express');
const router = express.Router();

const homeController = require('./src/controllers/homeController')

function meuMiddleware(req, res, next) { // middleware é uma função que resgata a requisição e respostas de uma routerização. Middlewares, também possuem o argumento "next" que servirá para passar para o próximo middleware na rota
    req.session = { nome: 'Luiz', sobrenome: 'Silva'}; // req.session representa um sessão solicitada. Serve para levar dados de uma requisição para outra, armazenando-os temporariamente
    console.log();
    console.log('Passei no middleware');
    console.log();
    next();
}

router.get('/', meuMiddleware, homeController.home, function(req, res) {
    console.log('ainda estou aqui');
}); // meuMiddleware será executado primeiro e depende de next para ir para o middleware criado e exportado de fora como módulo, chamado "home", do arquivo "homeController"
// middlewares dependem do parametro "next" para passarem para a próxima função. Caso não possua "next" a requisição carregará infinitamente, caso não haja resposta

router.post('/', homeController.sendForms);

module.exports = router;
