const result = maiorQue(10.01, 10.001);

console.log(result);

// primeira forma

/*
function maiorQue (num1, num2) {
    return Math.max(num1, num2);
} 
*/

// segunda forma

/*
function maiorQue (num1, num2) {
    return num1 > num2 ? num1 : num2;
}
*/

// ou 

const maiorQue = (num1, num2) => num1 > num2 ? num1 : num2;
