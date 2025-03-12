const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true })); // utilizando o middleware para identificar o tipo de dado
app.use(routes); // utilizando routes para o encapsulamento, e atribuindo quem os controla

app.listen(3000, () => { // escutando a rota definida
    console.log('https://localhost:3000')
})