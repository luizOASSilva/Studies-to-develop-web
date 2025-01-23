// primeira forma

// const date = new Date(); 

// function criaH1 () {
//     const h1 = document.createElement('h1');
//     return h1;
// }

// function getDate (date) {
//     const weekDay = date.getDay();
//     const day = date.getDate();
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     const hour = date.getHours();
//     const min = date.getMinutes();

//     const monthName = monthText(month);
//     const weekDayName = weekDayText(weekDay);
    
//     const msg = `${weekDayName}, ${addZero(day)} de ${monthName} de ${year} às ${addZero(hour)}:${addZero(min)}`;

//     setMessage(msg)  
// }

// function monthText (month) {
//     switch(month) {
//         case 0:
//             return 'Janeiro';
//         case 1:
//             return 'Fevereiro';
//         case 2:
//             return 'Março';
//         case 3:
//             return 'Abril';
//         case 4:
//             return 'Maio';
//         case 5:
//             return 'Junho';
//         case 6:
//             return 'Julho';
//         case 7:
//             return 'Agosto';
//         case 8:
//             return 'Setembro';
//         case 9:
//             return 'Outubro';
//         case 10:
//             return 'Novembro';
//         case 11:
//             return 'Dezembro';
//         default: 
//             return 'data inválida';
//     }   

// }

// function weekDayText (weekDay) {
//     switch(weekDay) {
//         case 0:
//             return 'Domingo';
//         case 1:
//             return 'Segunda';
//         case 2:
//             return 'Terça-feira';
//         case 3:
//             return 'Quarta-feira';
//         case 4:
//             return 'Quinta-feira';
//         case 5:
//             return 'Sexta-feira';
//         case 6:
//             return 'Sábado';
//         default: 
//             return 'data inválida';
//     }   

// }

// function addZero(value) {
//     const zero = 0;
//     return value > 10 ? value : `${zero}${value}`;
// }

// function setMessage (msg) {
//     const dateContainer = document.querySelector('#dateContainer');
//     const h1 = criaH1();
//     dateContainer.appendChild(h1);

//     h1.innerHTML = msg;
// }

// getDate(date); 

// segunda forma

date = new Date();

function getDate (date) {
    const weekDay = date.getDay();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();
    
    const monthName = monthText(month);
    const weekDayName = weekDayText(weekDay);
        
    const msg = `${weekDayName}, ${addZero(day)} de ${monthName} de ${year} às ${addZero(hour)}:${addZero(min)}`;
    
    setMessage(msg)  
}

function monthText (month) {
    const name = ['Janeiro', 'Favereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return name[month];
}

function weekDayText (weekDay) {
    const name = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return name[weekDay];
}

function addZero(value) {
    const zero = 0;
    return value > 10 ? value : `${zero}${value}`;
}

function criaH1 () {
    const h1 = document.createElement('h1');
    return h1;
}
    
function setMessage (msg) {
    const dateContainer = document.querySelector('#dateContainer');
    const h1 = criaH1();
    dateContainer.appendChild(h1);
    
    h1.innerHTML = msg;
}

getDate(date);

// terceira forma

// const data = new Date();
// const dateContainer = document.querySelector('#dateContainer');    
// const h1 = document.createElement('h1');

//  dateContainer.appendChild(h1);

// h1.innerHTML = `${data.toLocaleDateString('pt-BR', {dateStyle: 'full'})} ${data.toLocaleTimeString('pt-BR', {timeStyle: 'short'})}`;