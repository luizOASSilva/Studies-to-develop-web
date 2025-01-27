const form = document.querySelector('#form');
const h1 = document.querySelector('h1');
let buttonPlay = document.querySelector('#play');
let playing;

let UnixDate = new Date(0 + (60 * 60 * 3 * 1000)) // resetando objeto Date para resetar a data

form.addEventListener('submit', function timerAction (evt) {
    evt.preventDefault();

    if(evt.submitter.id === 'play'){
        playTimer();
        buttonPlay.setAttribute('disabled', true);
        h1.style.color = 'darkkhaki';   
        
    } 
    if(evt.submitter.id === 'pause'){
        pauseTimer();
        buttonPlay.removeAttribute('disabled');
        h1.style.color = 'darkred';
    }
    if(evt.submitter.id === 'reset'){
        resetTimer();
        buttonPlay.removeAttribute('disabled');
        h1.style.color = 'darkkhaki'; 
    }
});

function playTimer() {
    playing = setInterval(() => {
        UnixDate.setSeconds(UnixDate.getSeconds() + 1);
        h1.innerHTML = UnixDate.toLocaleTimeString('pt-BR');  
    }, 1000)
}

function pauseTimer() {
    clearInterval(playing); 
}

function resetTimer() {
    UnixDate = new Date(0 + (60 * 60 * 3 * 1000)) // resetando objeto Date para resetar a data
    h1.innerHTML = '00:00:00';   
    clearInterval(playing); 
}
