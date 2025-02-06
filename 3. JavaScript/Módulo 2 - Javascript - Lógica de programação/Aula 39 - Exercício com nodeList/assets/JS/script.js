// const divParagrafos = document.querySelector('.paragrafosContainer');
// const p = divParagrafos.querySelectorAll('p'); querySelectorAll retorna uma nodeList. nodeList se comporta de maneira parecida com um array, porém, retorna nós do DOM

// console.log(p);

// let child_nodes = divParagrafos.childNodes;
// console.log(child_nodes);

// for (valor of child_nodes){
//     console.log(valor);
// }

// dada as diferentes maneiras de capturar um nodeList do DOM, use este aprendizado para o seguinte exercício:
// coloque o background dos parágrafos da mesma cor do background ao fundo da página, utilize conceitos de DOM, nodeList, e for

const body = document.querySelector('body');
const elementNodeList = getElementChilds('.textContainer', 'p');
const bodyBackgroundColor = getBackgroundColor(body);

setBackgroundColorInAll(elementNodeList, bodyBackgroundColor);

function setBackgroundColorInAll (element, backgroundColor) {
    for (let value of element) {
        value.style.background = backgroundColor;
        value.style.color = '#FFFFFF';
    }
}

function getElementChilds (parent, child) {
    const parentElement = document.querySelector(parent);
    return parentElement.querySelectorAll(child);
}

function getBackgroundColor (element) {
    const elementStyle = getComputedStyle(element);

    const backgroundColor = elementStyle.getPropertyValue('background-color');

    return backgroundColor;
}
