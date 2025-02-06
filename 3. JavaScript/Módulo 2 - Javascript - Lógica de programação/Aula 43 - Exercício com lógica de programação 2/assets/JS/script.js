// Escreva uma função chamada "paisagem" que recebe dois argumentos, largura e altura de uma imagem (number). Retorne "true" se a imagem estiver no modo paisagem

/*
let orientacao = isLandscape(1280, 720);

console.log(orientacao);

orientacao = isLandscape(1080, 1350);

console.log(orientacao);

function isLandscape (largura, altura) {
    return largura > altura;
}
*/

// outra forma

const isLandscape = (width, height) => width > height;

console.log(isLandscape(1980, 1080));
