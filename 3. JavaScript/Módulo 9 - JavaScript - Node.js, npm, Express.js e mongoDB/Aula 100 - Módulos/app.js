const mod1 = require('./mod1'); // importando por meio de require, tudo o que foi exportado do módulo em que requetimos
const falaNome = require('./mod1').falaNome; // podemos importar apenas uma coisa em específica exportada. Nesse caso exportamos apenas a função "falaNome" e utilizamos ela diretamente
// const falaNome = mod1.falaNome; pode-se atribuir o valor exportado à uma variável

console.log(mod1);
console.log(mod1.qualquerCoisa);

console.log(falaNome('Luiz', 'Silva')); // após exportado, podemos utilizá-lo diretamente como uma função

// é possível fazer uma associação via desestruturação (destructuring assignment) com o módulo importado por "require"

const {coisa1, coisa2, coisa3} = require('./mod1'); // quando utilizamos o caminho relativo para importar, estamos utilizando módulos locais, porém podemos usar também, módulos do node

console.log(coisa1, 'Essa é a coisa 1');
console.log(coisa2, 'Essa é a coisa 2');
console.log(coisa3, 'Essa é a coisa 3');

const { Pessoa } = require('./mod1'); // desestruturando a clase Pessoa para ser instanciada

console.log(Pessoa);

const p1 = new Pessoa('Luiz');

console.log(p1);

// const path = require('path'); path é um módulo padrão de "node_modules", deve ser instalado e não requer caminho, apenas o seu nome

// npm i axios

const axios = require('axios') // importando axios após baixá-lo pelo "npm"

axios('https://api.adviceslip.com/advice') // fazendo requisição com o axios
    .then(resp => {
        const obj = resp.data;
        const advice = obj.slip.advice;
        console.log(advice);
    })
.catch(e => console.log(e)); // tratando o erro se a requisição falhar


const teste = require('./mod1').teste;

console.log(teste);

