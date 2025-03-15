require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(data => app.emit('successfully'))
    .catch(e => console.log(e));

const session = require('express-session'); // "sessions" guardam dados temporariamente de um usuário. As sesões escutam e mapeiam toda a interação do usuário com o site
const MongoStore = require('connect-mongo'); // MongoStore é uma implementação para o armazenamento de sessions e cookies em uma base de dados mongoDB
const flash = require('connect-flash'); // "flash-messages" são mensagens rápidas que devem sumir depois de serem lidas pel usuário

const router = require('./router');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({ // passando as configurações da session
    secret: 'sadadasdasaf', // secret é a forma utilizada pelo navegador para gerar cookies seguros. Caso ocorrá uma alteração maliciosa, será rejeitada na ausência do secret correto
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI, // "mongoUrl" recebe a url da base de dados. Esta contida em ".env". 
        // collectionName: 'app_sessions', -> nome da coleção onde será guardada a session. Não é obrigatória, caso não configurada o nome padrão é "sessions"
        ttl: 7 * 24 * 60 * 60,
    }), // dizendo à session que ela deve ser aramzenada em uma "storage". Nesse caso, estamos configurando para que session,ao invés de ser armazenado na memória (como por padrão), seja armazenado no banco dados (o que o torna mais seguro, já que cookies podem conter informações sensíveis)
    // "mongoose.connextion" é a referência para a atual conexão existente no site
    resave: false, // "resave" no valor "false" configura se uma sessão pode ser salva de volta no armazenamento
    saveUninitialized: false, // "saveUnitializes" no valor "false" configura se a sessão deve ser salva na sua criação, mesmo vazia
    // por questões de desempenho e economia de recursos, a configuração a cima deve estar em false
    cookie: { // "cookie", configura como ele se comportará no navegador. O cookie é o que permite o navegador identificar uma sessão diferente para cada usuário
        // cookie possui um identificador (id) único associado a cada usuário
        maxAge: 1000 * 60 * 60 * 24 * 7, // "maxAge" define como a duração de validade do cookie, ou seja, a duração em que o cookie será mantido no navegador antes de expirar
        // o cookie demorará 7 dias para expirar (tempo em milissegundos)
        httpOnly: true // impede que o cookie seja alterado ou manipulado no lado do cliente 
    }
});

app.use(sessionOptions); // pedindo para o express utilizar o middleware de session definido, chamado "sessionOptions"
// ** OBS: sessionoptions deve ser incializado e atribuído a "use()" antes de definir as rotas e o middleware para requisições do tipo "set" ou POST

app.use(flash()); // "flash()" é um objeto para flash-messages. Nesse caso pedimos para o express usar "flash()";

app.use(router);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src', 'assets', 'views'));

app.on('successfully', () => {
    app.listen(3000, () => console.log('https://localhost:3000'));
});
