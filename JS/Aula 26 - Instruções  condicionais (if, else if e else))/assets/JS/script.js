// suponha que você precisa de um programa que dê bom dia para as pessoas antes das meio-dia. Para isso pode-se usar a instrução condicional "if"

let hora = 11;

if(hora < 12) { // criação de um bloco de estrutura condicional. if(se) uma expressão entre parêntese for verdadeira executa o que está emtre chaves {}
    console.log('Bom dia!');
}

hora = 12;

if(hora < 12) { // if(se) a condição for verdadeira executa, caso não seja, é ignorada
    console.log('Bom dia!');
}

// **obs: if pode ser usado sozinho, sem else if ou else

// agora suponha que o aplicativo precisa dizer também "boa tarde" a partir das meio-dia. Para isso podemos usar o else if (senão se) após o if(se)

if(hora <= 12) { 
    console.log('Bom dia!');
} else if (hora > 12){ // else if precisa de uma condicional e que essa seja verdadeira para execução
    console.log('Boa tarde');
}

// **obs: else if pode ser usado diversas vezes de acordo com a necessidade. Um após o outro.

// agora suponha que por fim, o aplicativo precisa dizer "ruim dia" se não estiver dentro dos horários estipulados para bom dia e boa tarde. Para isso usamos o else (senão), que não necessita de operação condicional e é executado por último caso, quando nenhuma condicional anterior é verdadeira

hora = 22;

if(hora <= 12) { 
    console.log('Bom dia!');
} else if (hora >= 12 && hora <=  18){ // posso também utilizar operadoradores lógicos para fazer duas comparações. Nesse caso para definir quando começa a noite, posso usar o operador && (AND). Esse verificará se o número está entre 12 (hora > 12) e 18 (hora < 18)
    console.log('Boa tarde');
}else {
    console.log('ruim dia'); // caso nenhuma das anteriores seja verdadeira, esta é executada. Como 22 é maior que 12 e não está entre 12 e 18, essa instrução condicional será executada
}

// **obs: no uso do else else, ele deverá ser o único e necessita existir estritamente somente se houver um if
