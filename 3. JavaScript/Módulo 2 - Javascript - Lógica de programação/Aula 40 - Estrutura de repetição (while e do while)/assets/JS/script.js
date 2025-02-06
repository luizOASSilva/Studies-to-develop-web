// as estruturas de repetição while e do while funcionam de maneira parecida com laço "for": Constroem laços de repetição com o número de loopings baseado em uma condição. Porém, normalmente ao se trabalhar com "while" e "do while", não temos conhecimento do tamanho necessário para a quantidade de voltas no looping

let i = 0;

/*

** FORMA ERRADA DE FAZER

while (i <= 10) {
    console.log(i);
}

motivo: ao criar um laço "while", a primeira coisa que deve ser verificada é se a variável de controle, responsável por manter a estrutura de repetição "while", está sendo incrementada. Pois se não for incrementada, a condicional entre parênteses sempre será verdadeira - o que acarretará em um looping infinito - e consequentemente um travamento do navegador
*/

// ** FORMA CORRETA

while (i <= 10) { // while (enquanto) verifica a condicional entre parênteses "()" e se verdadeira inicia o looping
    console.log(i);
    i++; // incrementa +1 na variável de controle para marcar a passagem pelo looping
} // retorna e verifica se a condicional "i <= 10 (i é maior ou igual a 10?)" novamente é verdadeira. Se não for, sai do laço

// exemplo de usabilidade do "while";

function random(min, max) { // função para gerar número aleatório com valor mínimo e máximo
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
}

let randNum = random(1, 50); // gera um número aleatório entre 1 e 50
console.log(`Número randômico: ${randNum}`);

while (randNum !== 10) { // enquanto randNum for diferente de 10 executa o laço
    randNum = random(1, 50); // gera novo número aleatório
    console.log(randNum); // apresenta o número aleatório
} // retorna para o início, verifica se a variável "randNum" ainda é diferente de 10, se for, executa o laço novamente quantas vezes for necessária até que se torne falsa - e caso seja falsa - sai do laço

// Já a estrutura de repetição "do while" também em as mesmas atribuições de "for" e "while", mas diferente deles, ao executar "do while", a cheacagem da condicional é feita após o laço

do { // executa o que for instuído
    // ** obs: "do while" sempre executará pelo menos uma vez
    randNum = random(1, 50); // gera novo número aleatório
    console.log(randNum);
} while (rand !== 10); // checa a condicional, caso verdadeira, executa novamente o bloco "do"
