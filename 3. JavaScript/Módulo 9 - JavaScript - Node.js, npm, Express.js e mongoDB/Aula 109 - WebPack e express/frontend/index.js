import './assets/CSS/style.css' 

const obj = {
    nome: 'Luiz',
    idade: 19
};

const newObj = { ...obj };

console.log(newObj);

const h1 = document.querySelector('h1');
h1.innerHTML = 'escrevido';
