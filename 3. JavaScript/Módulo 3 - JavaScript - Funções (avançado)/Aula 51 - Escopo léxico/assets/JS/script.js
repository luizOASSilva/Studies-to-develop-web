// escopo léxico é o aninhamento de funções, onde ao apresentar uma variável, se não definida, a mesma é buscada em um escopo parente

const nome = 'Luiz';

function falaNome() {
    console.log(nome); // funções buscam valores de variáveis em seu próprio escopo, caso não encontrem, partem para seu parente mais próximo
}
falaNome();

function usaFalaNome() {
    const nome = 'Victor'; // como nome está sendo redefinido dentro de uma função, seu escopo é exclusivamente de uso para essa função
    falaNome();
}
usaFalaNome();

