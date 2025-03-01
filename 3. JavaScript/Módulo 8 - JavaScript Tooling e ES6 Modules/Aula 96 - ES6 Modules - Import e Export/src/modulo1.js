// ES6 Modules é uma maneira de trabalhar com JavaScript de forma moderna, podemos fazer isso por meio do webpack e babel (para transpilar o código e permitir funcionamento em qualquer versão de navegador)

const nome = 'Luiz'; 
const sobrenome = 'Silva';
const idade = 19;

function soma(x, y) {
    return x + y;
}

// "export" exporta o módulo para ser utilizado em outras páginas por meio do "import"
export { nome, sobrenome, idade, soma }; // podemos exportar uma variável, classe, objeto, o que quer que seja