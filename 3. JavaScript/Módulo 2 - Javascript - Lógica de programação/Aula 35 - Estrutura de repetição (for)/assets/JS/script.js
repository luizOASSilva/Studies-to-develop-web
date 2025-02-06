// for é uma estrutura de repetição que permite criar loop e executar a mesma tarefa repetidas vezes

// imagine que você pretende criar um algoritmo que, partindo da linha 1, conte até a linha 5 em diferentes console.log()

// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// para automatizar essa tarefa, pode ser usada a estrutura de repetição "for"

for (let i = 0; i <= 5; i++) { // inicia um laço de repetição
    // for trabalha com o escopo de bloco e para sua criação, necessita-se passar por 3 etapas (separadas por ";"):
    // 1. a criação de uma variável de controle para definir o ponto de partida do "for" (let i = 0), "i" sgnifica index.
    // 2. realizar uma estrutura condicional para delimitar o fim da repetição (i <= 5)
    // 3. um incremento para a variável de controle realizar ao final de um looping (i++)

    console.log(i); // é possível verificar que a cada looping, é somado mais um na variável "i", até que a condicional i <= se torne falsa e então a estrutura de repetição é seja abortada

} // fim do "for" (retorna para o começo, soma +1 na variável "i" e verifica a condicional)

for (let i = 1; i <= 5; i++) { // a variável "i" não necessita começar especificamente do 0
    console.log(`Linha ${i}`);
} 

for (let i = 0; i <= 10; i += 2) { // o incremento da variável, pode ser realizado por qualquer número maior ou menor que "0"
    console.log(`Outra linha ${i}`);
} 

for (let i = 10; i >= 0; i -= 2) { // nesse caso, a cada looping, menos 2 é subtraído da variávei "i" até que i >= 0 seja falsa
    console.log(`Outra linha ${i}`);
} 

for (let i = 0; i <= 10; i += 2) { // o incremento da variável, pode ser realizado por qualquer número maior que 0
    console.log(`Outra linha ${i}`);
} 

for (let i = 0; i <= 10; i++) { // criando uma estrutura de repetiçao que verifica se o número é par ou ímpar
    const parOuImpar = i%2 === 0 ? 'par' : 'ímpar'; // variável "parOuImpar" recebe atribuição com base no resultado da operação térnaria que verifica se: o resto da divisão da variável de controle "i" é zero, caso seja, realiza a atribuição do valor "par" para a variável "parOuImpar" e caso seja falsa, o valor "ímpar"
    console.log(`${i} é ${parOuImpar}`);
}

// podemos também automatizar a percursão de um array por meio da estrutura de repetição "for"

//índices            0       1         2
const listaFruta = ['Maçã', 'Banana', 'Uva'];

for (let i = 0; i < listaFruta.length; i++) { // a condicional verifica se i é < que o tamanho dw array em elementos
    console.log(listaFruta[i]); // seta o índice do array "listaFruta" de acordo com o valor da variável "i" no laço
}
