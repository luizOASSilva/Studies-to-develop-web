let varA = 'A';
let varB = 'B'; 
let varC = 'C'; 

console.log(varA, varB, varC);

// coloque na ordem B C A sem criar uma nova variável nem mudar de ordem

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

// segunda forma de resolver

varA = 'A';
varB = 'B'; 
varC = 'C'; 

console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);