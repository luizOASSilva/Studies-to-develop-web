const num = Number(prompt('Digite o melhor número:'));

const title = document.getElementById('title');
const text = document.getElementById('text');

title.innerHTML = num;

text.innerHTML += `<P> Raíz quadrada: ${Math.sqrt(num)} </p>`;
text.innerHTML += `<P> ${num} é inteiro: ${Number.isInteger(num)} </p>`;
text.innerHTML += `<P> ${num} é NaN: ${Number.isNaN(num)} </p>`;

console.log(Number.isInteger(num));
if(Number.isInteger(num) == false) {
    text.innerHTML += `<P> Arredondado pra baixo: ${Math.floor(num)} </p>`;
    text.innerHTML += `<P> Arredondado pra cima: ${Math.ceil(num)} </p>`;
}
text.innerHTML += `<P> Com duas casas decimais: ${num.toFixed(2)} </p>`;
