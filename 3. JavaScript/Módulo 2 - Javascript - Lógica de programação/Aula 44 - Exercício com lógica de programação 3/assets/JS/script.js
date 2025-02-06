// escreva uma função que recebe um número e retorne o seguinte:
// número é divisível por 3 = fizz
// numero é divisível por 5 = buzz
// número não é dividível por 3 e 5 = retorna o próprio número
// checar se o número é realmente um número
// use a função com números de 0 a 100

for (let i = 1; i <= 100; i++){
    console.log(fizzBuzz(i));
}

function fizzBuzz(num) {
    if(typeof num === 'number'){
        if(num%3 === 0) {
            return 'Fizz';
        } else if(num%5 === 0){
            return 'Buzz';
        } else{
            return num;
        } 
    } else {
        return num;
    }
}