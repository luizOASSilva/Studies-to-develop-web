// asserção ou type assertion é uma espécide casting, ou seja, mudança de um tipo para outro

const body = document.querySelector('body'); // type pode ser HTMLBodyElement ou null
body.style.background = 'red'; // elemento body pode ser null

// soluções

// condicional

if (body) body.style.background = 'red'; // refinando o tipo, ou seja, testando se existe (notNull) / estreitamento de tipos

// non-null assertion (!)

const body1 = document.querySelector('body')!; // Quando adicionamos "!" no final da atribuição, dizemos à variável que ela ão pode ser null
body1.style.background = 'blue';

// asserção de tipo

const body2 = document.querySelector('body') as HTMLBodyElement; // Quando adicionamos "!" no final da atribuição, dizemos à variável que ela ão pode ser null
body1.style.background = 'blue'

// HTMLElement

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa' // quando definimos o tipo especificamente, podemos usar autocomplete do elemento
input.focus();

const body3 = document.querySelector('.input') as number; // não podemos tipar html dom com qualquer tipo, apenas com tipos e subtipos
// temos que ralizar a coersão para unknown e depois para um tipo específico

const body4 = document.querySelector('.input') as unknown as number;




