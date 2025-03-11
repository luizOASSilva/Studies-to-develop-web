const fs = require('fs').promises;

// fs.writeFile(directory, 'Frase 1', { flag: 'w' }); escrevendo no arquivo e enviando para "app.js". "flag: 'w'" indica que se o arquivo já existir da mesma maneira, o mesmo será sobrescrito. Se flag recebesse o valor "a", ocorreria um append, ao invés de uma reescrita

module.exports = async function write (dados, dir) {
    try { // tenta
        await fs.writeFile(dir, dados, { flag: 'w' }); // excrevendo no arquivo "pessoas.json" os valores do objeto convertido em json
    } catch(e) { // trata erro
        console.log(e);
    }
};
