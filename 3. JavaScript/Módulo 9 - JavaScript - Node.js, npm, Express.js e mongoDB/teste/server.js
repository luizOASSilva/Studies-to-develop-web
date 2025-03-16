require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./router');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { create } = require('./src/models/homeModel');

mongoose.connect(process.env.CONNECTION_URI)
    .then(resp => app.emit('successfully'))
    .catch(e => console.log(e));

app.use(express.urlencoded({extended:true}));
app.use(router);

sessionOptions = session({
    secret:'sdadasddadsdsd+asadad',
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTION_URI,
        ttl: 1000 * 60 * 60 * 24 * 7
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
        httpOnly: true
    }
})

app.set('view engine', 'ejs');
app.set('views', __dirname, 'src', 'views');

app.use(express.static(path.resolve(__dirname, 'public')));

app.on('successfully', () => {
    app.listen(3000, () => {
        console.log('https://localhost:3000');
    });
});
