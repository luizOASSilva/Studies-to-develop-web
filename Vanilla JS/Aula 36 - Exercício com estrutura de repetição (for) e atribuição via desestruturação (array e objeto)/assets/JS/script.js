// utilize o array "elementos" para apresentar texto na tela. Utilizando todos os conceitos aprendidos até hoje.

const container = document.querySelector('.container');
const div = criaDiv();
container.appendChild(div);

const elementos = [
    {tagName: 'h1', texto: 'Frase 1'},
    {tagName: 'div', texto: 'Frase 2'},
    {tagName: 'section', texto: 'Frase 3'},
    {tagName: 'footer', texto: 'Frase 4'},
];

for (let i = 0; i < elementos.length; i++) {
    obj = elementos[i];
    ({tagName, texto} = obj);

    const elemento = criaElemento(tagName);

    setText(elemento, texto);
}

function criaElemento (tagName) {
    const elemento = document.createElement(tagName); 
    return elemento;
}

function setText (elemento, texto) {
    // elemento.innerHTML = texto;
    textoNode = document.createTextNode(texto);
    elemento.appendChild(textoNode);
    div.appendChild(elemento);
}

function criaDiv () {
    const div = document.createElement('div');
    return div;
}
