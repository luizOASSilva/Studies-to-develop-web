require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./router');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const helmet = require('helmet'); // requisitando uma biblioteca de proteção de requisições


mongoose.connect(process.env.CONNECTION_URI)
    .then(resp => app.emit('successfully'))
    .catch(e => console.log(e));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

sessionOptions = session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTION_URI,
        ttl: 1000 * 60 * 60 * 24 * 7
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14,
        httpOnly: true
    }
});

app.use(sessionOptions);

app.use(helmet())

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(express.urlencoded({extended:true}));

app.use(router);    

app.on('successfully', () => {
    app.listen(3000, () => {
        console.log('https://localhost:3000');
    });
});
