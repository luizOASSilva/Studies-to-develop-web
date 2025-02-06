const data = new Date(); // definindo a função construtora do objeto Date()
const diaSemana = data.getDay(); // dia da semana começa no 0. Sendo o 0, Domingo

// Suponha que você está fazendo um programa que apresente o dia da semana atual

let diaSemanaNome

// switch/case é uma instrução de controle que permite executar diferentes blocos de códigos com base em valores específicos, é útil para lidar com condições, evitando o uso de estruturas condicionais aninhadas como o if, else if e else
switch (diaSemana) { // para iniciar uma instrução switch case, primeiro é preciso usar o prefixo "switch" e entre parênteses a variável que será checada.
    case 0: // para verificar o valor, escreve-se case, o valor testado e após isso dois pontos (:) para tomar uma decisão
        diaSemanaNome = 'Domingo'; // se for verdadeiro o case, executa o código 
        break; // e após executado, o "break" é o responável por interromper a execução do "switch"
    case 1: // caso o primeiro "case" não seja verdadeiro, vai para o próximo "case"
        diaSemanaNome = 'Segunda-feira';
        break;
    case 2:
        diaSemanaNome = 'Terça-feira';
        break;
    case 3:
        diaSemanaNome = 'Quarta-feira';
        break;
    case 4:
        diaSemanaNome = 'Quinta-feira';
        break;
    case 5:
        diaSemanaNome = 'Sexta-feira';
        break;
    case 6:
        diaSemanaNome = 'Sábado';
        break;
    default: // "default" funciona como o "else". Caso nenhum case seja retornado verdadeiro, o default será executado
        diaSemanaNome = 'Data inválida';
}

console.log(diaSemanaNome);

// switch/case pode estar dentro de uma função e isso permite a não utilização do "break"

function getDiaSemanaTexto(diaSemana) { // utilizar um switch/case dentro de uma função permite que a operação de controle mseja reutilizada diversas vezes no código
    let diaSemanaNome2;

    switch (diaSemana) {
        case 0:
            diaSemanaNome = 'Domingo';
            return diaSemanaNome2; // ao invés do "break", podemos retornar um valor
        case 1:
            diaSemanaNome = 'Segunda-feira';
            return diaSemanaNome2;
        case 2:
            diaSemanaNome = 'Terça-feira';
            return diaSemanaNome2;
        case 3:
            diaSemanaNome = 'Quarta-feira';
            return diaSemanaNome;
        case 4:
            diaSemanaNome = 'Quinta-feira';
            return diaSemanaNome;
        case 5:
            diaSemanaNome = 'Sexta-feira';
            return diaSemanaNome;
        case 6:
            diaSemanaNome = 'Sábado';
            return diaSemanaNome;
        default:
            diaSemanaNome = 'Data inválida';
            return diaSemanaNome;
    }
}

const diaSemanaTexto2 = getDiaSemanaTexto(diaSemana);

console.log(diaSemanaTexto2);