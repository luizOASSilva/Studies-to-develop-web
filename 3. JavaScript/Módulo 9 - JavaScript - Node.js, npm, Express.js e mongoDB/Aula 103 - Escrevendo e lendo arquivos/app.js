const write = require('./modules/write');
const path = require('path');
const read = require('./modules/read');

const dir = path.resolve(__dirname, 'pessoas.json'); // passando o caminho relativo de onde o arquivo deve ser criado

const pessoas = [
    { nome: 'João' },
    { nome: 'Luiz' },
    { nome: 'Helena' }
];

const json = JSON.stringify(pessoas, '', 2); // convertendo objeto para json

write(json, dir); // enviando a função "write" exportada do módulo criado

async function readFile(dir) { // cria uma função assíncrona que fará a leitura do arquivo
    const dados = await read(dir); // executa a função importada de outro módulo que retornará o json
    renderData(dados); // chama a função "renderData" e envia como parâmetro o json recebido pela função "read()"
}

function renderData(dados) {
    const obj = JSON.parse(dados); // converte o json em obj para ser tratado pelo avaScript
    for (let { nome } of obj) { // iterando diretamente da chave
        console.log(nome); // apresenta todos os nome no array de objetos
    }
}

readFile(dir);
