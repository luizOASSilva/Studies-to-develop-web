const express = require('express');
const path = require('path');

const app = express();
const routes = require('./routes');

const middlewareGlobal = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended:true }));

// nossos próprios middlewares
app.use(middlewareGlobal); // setando um middleware global que passará em todas as requisições em todas as rotas
app.use(routes);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src', 'views'));

app.use(express.static('./public'));

app.listen(3000, () => {
    console.log('https://localhost:3000');
});
