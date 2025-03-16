const homeModel = require('../models/homeModel');

homeModel.create({
    nome: 'Berenice',
    especie: 'Gato persa',
    idade: 2
});

exports.home = (req, res) => {
    req.session.user = { nome: 'Luiz', sobrenome: 'Silva'};
    res.render('index');
};
