// union type permite ao TypeScript definir mais de um tipo 

// Utilizando | (pipe) podemos dizer que temos mais de um tipo

function addOrConcat(a: number | string, b: number | string) : number | string { // definindo que a e b podems ser do tipo number ou string
    if (typeof a === 'number' && typeof b === 'number') return a + b; // cobrindo e assegurando a tipagem correta
    return `${a} ${b}`
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', 20));
console.log(addOrConcat('100', '1'));