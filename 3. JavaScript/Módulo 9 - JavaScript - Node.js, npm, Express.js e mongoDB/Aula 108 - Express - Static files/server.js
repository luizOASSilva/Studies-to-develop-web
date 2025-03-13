const express = require('express');
const app = express();
const router = require('./router');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use(express.static(path.resolve(__dirname, 'public'))); // dizendo para o express onde estarão localizados os conteúdos estáticos, como css, img, ícones e entre outros
// nesse caso estará a partir da pasta raíz, em public

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => { console.log('https://localhost:3000') });
