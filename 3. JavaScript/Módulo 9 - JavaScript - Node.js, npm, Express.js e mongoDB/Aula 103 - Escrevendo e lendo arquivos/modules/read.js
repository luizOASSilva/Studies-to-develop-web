const fs = require('fs').promises;

module.exports = (directory) => fs.readFile(directory, 'utf8'); // retorna uma promise que lerá o arquivo
