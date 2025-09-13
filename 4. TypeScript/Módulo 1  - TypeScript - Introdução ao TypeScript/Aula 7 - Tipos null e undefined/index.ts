var x;
// if (typeof x === 'undefined') // estreitamento de tipo
//    x = 20;
console.log(x * 20); // x recebe type undefined e por isso gerá erro ao calcular com número

function createPerson(
    firstName: string, 
    lastName?: string
): {
    firstName: string;
    lastName?: string;
} {
    return {
        firstName,
        lastName,
    };
}

function squareOf(x: any) { // podemos definir funções ou tipos com duas opções de retorno. Nesse caso ou o retorno é do tipo number ou null
    if(typeof x === 'number') return x * x;
    return null;
}

const squareOfNumber = squareOf(2);
const squareOfString = squareOf('2');

if (squareOfNumber === null) {
    console.log('Deu erro', squareOfNumber * 2) // TypeScript entende condicionais e entende que nesse momento do código a variável "squareOfNumber" pode ser null e por isso apresenta erro
} else {
    console.log(squareOfNumber * 100); // aqui é permitido, após o estreitamento
}
