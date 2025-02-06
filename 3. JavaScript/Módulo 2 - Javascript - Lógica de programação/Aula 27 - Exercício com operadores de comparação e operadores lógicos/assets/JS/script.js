function meuEscopo () {

    const form = document.querySelector('#form');

    function handleData(e) {
        e.preventDefault();
    
        const inputPeso = e.target.querySelector('#peso');
        const inputAltura = e.target.querySelector('#altura');

        const altura = Number(inputAltura.value);
        const peso = Number(inputPeso.value);
        
        if(!peso) {
            setResultado('Peso inválido', false);
            return;
        }
        if(!altura) {
            setResultado('altura inválida', false);
            return;
        }

        const IMC = calculaIMC(peso, altura);
        const nivelIMC =  getIMC(IMC);

        const msg = `Seu IMC é: ${IMC} e seu nível de IMC é ${nivelIMC}`;

        setResultado(msg, true)
    }

    function setResultado(msg, isValid){
        const resultado = document.querySelector('#resultado');
        const p = criaP();

        if(isValid) {
            p.classList.add('valid');
        } else {
            p.classList.add('bad');
        }
        p.innerHTML = msg;
        resultado.appendChild(p);
    }

    function criaP(){
        const p = document.createElement('p');
        return p;
    }

    function calculaIMC (peso, altura){
        const IMC = peso / (altura * altura);
        return IMC.toFixed(2);
    }

    function getIMC(IMC) {
        const nivel = ['abaixo do peso', 'peso normal', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];
        if(IMC < 18.5) return nivel[0];
        else if(IMC >= 18.5 && IMC < 25) return nivel[1];
        else if(IMC >= 30 && IMC < 35) return nivel[2];
        else if(IMC >= 35 && IMC < 40) return nivel[3];
        else return nivel[4];
    }

    form.addEventListener('submit', handleData);

}
meuEscopo();
