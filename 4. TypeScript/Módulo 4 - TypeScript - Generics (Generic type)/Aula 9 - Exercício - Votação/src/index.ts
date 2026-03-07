import Poll from "./Poll.js"; 

const poll1 = new Poll('Qual sua linguagem favorita?', ['Javascript', 'Typescript']);

console.log(poll1.question);
console.log(poll1.options);
console.log(poll1.vote(1));
console.log(poll1.votes);