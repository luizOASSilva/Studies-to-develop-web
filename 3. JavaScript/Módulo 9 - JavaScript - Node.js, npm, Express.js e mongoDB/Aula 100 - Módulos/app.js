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

// aula 2 - continuação

// const mult = require('./mod2'); importando o módulo diretamente e o utilizando como função

// console.log(mult(1, 2));

const Cachorro = require('./mod2'); // importando a classe de um módulo

const cachorrinho = new Cachorro('Ayla'); // instanciando o módulo
cachorrinho.latir(); // utilizando o método "latir" do módulo

console.log('Caminho atual: ', __filename); // "__filename" aponta para o nome do arquivo atual. Desde a raíz do computador e o nome do arquivo

console.log('Diretório atual: ', __dirname) // "__dirname" aponta para o diretório. Desde a raiz do computador e aponta para a pasta 

const path = require('path'); // path é um módulo reservado do node para traçar caminhos em diferentes sistemas de compuatdores, entre outra funções

console.log(path.resolve(__dirname, 'test')) // o método "resolve()" do objeto path é utilizado para definir o caminho absoluto para qualquer navegador, no primeiro argumento vai a localização atual(__dirname), nos outros as pastas espesíficas criadas dentro desse caminho absoluto
// acessando a pasta "test" como caminho absoluto para qualquer sistema