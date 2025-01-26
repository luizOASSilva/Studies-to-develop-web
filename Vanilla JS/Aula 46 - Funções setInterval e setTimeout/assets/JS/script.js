// setTimeout e setInterval são métodos já existentes no JavaScript para controlar o tempo
// setInterval executa uma função com um trecho de código repetidas vezes, com um atraso de tempo fixo entre cada chamada.
// setTimeout define um cronômetro que executa uma função ou trecho de código especificado quando o cronômetro expira.

let timer = setInterval(() => { // armazena na variável a contagem em milissegundos da função setInterval
   console.log('Sou repetido a cada meio segundo');
}, 500); // adiciona um delay de 500 milissegundos(meio segundo) entre cada ciclo

setTimeout(() => { // executa a função setTimeout, que é executada após o tempo definido após a vírgula
    clearInterval(timer) // limpa o interval9
}, 1500); // quando timer for igual a 1500 (milissegundos), clearInterval é o responsável por cancelar o ciclo
