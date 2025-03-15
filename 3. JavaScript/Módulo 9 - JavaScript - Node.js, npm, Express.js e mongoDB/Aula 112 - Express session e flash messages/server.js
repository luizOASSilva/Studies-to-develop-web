require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING)
    .then(data => app.emit('successfuly'))
    .catch(e => console.log(e));

const router = require('./router');

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src', 'assets', 'views'));


app.on('succesfully', () => {
    app.listen(3000, () => console.log('https://localhost:3000'));
})
