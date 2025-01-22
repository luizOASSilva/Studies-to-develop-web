//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const data = new Date(); // Date é uma função construtora. Ou seja descreve estados e comportamentos de um objeto
// as datas são contabilizadas em ms (milissegundos);

const tresHoras = 60 * 60 * 3 * 1000; // 60 segundos * 60 minutos * 3 horas * 1000 milissegundos

const data2 = new Date(0 + tresHoras); // quando colocamos o 0, pegamos o marco zero do timestamp da era UNIX. Quando somamos 3 horas, retornamos o horário dentro do fuso horário GMT-0 
console.log(data2);

const data3 = new Date(2024, 0, 21, 15, 14, 27, 1000); // envia a data por meio de nubers. A data enviada deve ser preenchida na ordem (ano-mês-dia hora:minuto:segundo.milissegundos)
console.log(data3);

const data4 = new Date('2024-04-21 12:00:45.100'); // é possível enviar uma data por uma string reconhecida pelo método date.parse. Formato (Ano, mês, dia hora, minuto, segundo, milissegundo)
console.log(data4);

// podemos pegar também os valores individuais

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // mês começa no valor 0, este sendo Janeiro e 11 sendo Dezembro
console.log('Mês', data.getMonth() + 1); // mês começa no valor 0, este sendo Janeiro 
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milissegundos', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // dia da semana começa no 0, este sendo domingo e 6 sendo sábado 

console.log(Date.now()); // podemos também pegar a data atual, no formato timestamp em milissegundos

// exemplo de usos do objeto Date

const dataDesformatada = new Date();

function formataData(data){
    const dia = zeroAEsquerda(data.getDate()); // a função zero a esquerda deve passar de argumento para o parâmetro 'num' o numero do dia retornado pelo método getDate() da função construtora do objeto Date()
    const mes = zeroAEsquerda(data.getMonth() + 1); // mês brasileiro não começa com 0
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

function zeroAEsquerda (num) { // função para adicionar 0 a esquerda do número menor que duas casas decimais
    return num >= 10 ? num : `0${num}`; // verifica se o argumento num é menor que 10, caso retorne verdadeiro, retorna o número como está. Caso seja falso, retorna uma template strings com 0 à esquerda do número
}

const dataBrasil = formataData(data);

console.log(dataBrasil);
