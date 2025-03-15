require('dotenv').config(); // importando objeto config da biblioteca dotenv
// "dotenv" é uma bibloteca que permite gerenciar variáveis de ambiente. Armazenando informações seguras como senhas, usuário e outras informações sensíveis

const express = require('express');
const app = express();

const router = require('./router');
const path = require('path');

const mongoose = require('mongoose'); // chamando moongoso, biblioteca responsável por modelar dados e criar a interação entre node e mongoDB

mongoose.connect(process.env.CONNECTION_STRING) // método "connect()", conecta na base de dados utilizando a url do mongoDB(que está no arquivo .env encriptada). Esse mmétodo retorna uma promise
// process.env é um objeto de "dotenv" que acessa arquivos ".env" e seus valores. Nesse caso "CONNECTION_STRING" possui a url de acesso ao mongoDB
    .then(() => { // "then" trata o êxito da conexão
        // suponha que a base de dados, deva ser carregada antes do express ouvir(listen) a porta operada
        app.emit('successfully'); // nesse caso, podemos emitir um sinal após a conexão com a base de dados pr meio de "app.emit()"
    }) .catch(e => { // "cathc" trata o erro da conexão com o banco de dados
        console.log(e);
    });

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(router);
app.use(express.static('./public'))

app.on('successfully', () => { // método "on()" resgata a mensagem emitida pelo método "emit()" que é testada no primeiro parâmetro da função
    app.listen(3000, () => { // express apenas escutará a porta 3000 quando a conexào com o banco de dados emirit a mensagem "successfully"
        console.log('https://localhost:3000');
    });
});
