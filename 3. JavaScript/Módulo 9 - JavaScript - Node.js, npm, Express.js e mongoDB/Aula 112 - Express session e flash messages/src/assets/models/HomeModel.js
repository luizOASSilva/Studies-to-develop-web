const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    nome: String,
    idade: Number
});

const homeModel = mongoose.model('Home', homeSchema);

module.exports = homeModel;