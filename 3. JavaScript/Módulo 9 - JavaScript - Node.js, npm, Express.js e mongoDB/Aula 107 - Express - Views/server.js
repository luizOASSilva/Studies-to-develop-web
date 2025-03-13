const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views')); // passando ao express onde estão localizadas as views. "__dirname" contém o diretório atual estático, "src" e "views" são os caminhos já dentro do diretório
app.set('view engine', 'ejs'); // passando para app, qual engine utilizar para ler as views. Nesse caso utilizamos ejs. Mas poderíamos utilizar por exemplo o "pug"

app.use(routes);

app.listen(3000, () => { console.log('https://localhost:3000') });
