const express = require('express');
const app = express();
const path = require('path');

const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('https://localhost:3000');
});
