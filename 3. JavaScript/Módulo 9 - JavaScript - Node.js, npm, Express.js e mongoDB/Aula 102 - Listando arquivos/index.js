const fs = require('fs').promises; // módulo "fs" ou "filesystem" é um módulo padrão de node_modules que permite manipular e interagir com os arquivos do sistema modelando no formato standard POSIX funcion
// POSIX é uma família de padrões que define as interfaces entre sistemas operacionais
const path = require('path'); // "path" é um módulo padrão de node_modules para manipular arquivos e pastas

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname); // atribui a variável rootDir, o valor que estiver preenchido e verdadeiro, o valor passado por parÂmetro ou o retorno de path.resolve \

    const files = await fs.readdir(rootDir); // função readdir retorna um array com todos os arquivos presentes no diretório
    // readdir é um método de "fs" responsável por ler o diretório passado a ele

    walk(files, rootDir); // enviando à função walk, os valores setados em files por readdir
}

async function walk(files, rootDir) {
    for(let file of files) { // iterando sobre os valores do array de arquivos, resgatando cada valor individualmente
        const filleFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(filleFullPath);

        if(/\.git/g.test(filleFullPath) || /node_modules/g.test(filleFullPath) || /\.json/g.test(filleFullPath)) continue; // caso seja encontrado um arquivo do tipo ".git", ou a pasta "node_modules", ou arquivos do tipo ".json", é ignorado e o laço vai para a próxima iteração

        if(stats.isDirectory()) { // se o arquivo listado é uma pasta, repete a função para traçar seu caminho relativo
            readdir(filleFullPath);
            continue; // continua para a próxima iteraçao do laço e ignora tudo que está fora do escopo de "if"
        } 
        
        console.log(filleFullPath);
    }
}

readdir();
