const homeModel = require('../models/homeModel');

homeModel.create({
    nome: 'Berenice',
    especie: 'Gato persa',
    idade: 2
});

exports.home = (req, res) => {
    res.render('index');
};
