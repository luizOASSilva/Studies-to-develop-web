const fs = require('fs').promises; // importando o módulo "fs" já existente em node_modules. Este mnódulo permite e interação com o sistema de arquivos de uma forma modelada
const path = require('path'); // importando o módulo já existente em node_modules

fs.readdir('')
    .then(files => console.log(files))
    .catch(e => console.log(e))


