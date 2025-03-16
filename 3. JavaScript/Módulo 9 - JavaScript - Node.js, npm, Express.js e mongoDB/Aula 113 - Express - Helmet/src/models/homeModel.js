const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    nome: String,
    especie: String,
    idade: Number
});

const homeModel = mongoose.model('Cat', homeSchema);

module.exports = homeModel;
