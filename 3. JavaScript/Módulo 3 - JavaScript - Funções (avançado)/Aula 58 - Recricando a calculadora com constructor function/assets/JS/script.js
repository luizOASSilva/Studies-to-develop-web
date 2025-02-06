function Calculadora() {
    this.display = document.querySelector('#display');
    
    this.inicia = () => {
        click();
        pressEnter();
    };

    const click = () => {
        document.addEventListener('click', e => {
            const element = e.target;
            if (element.classList.contains('btn')) {
                this.display.value += element.innerText;
            }
            if (element.classList.contains('clear')) {
                this.clear();
            }
            if (element.classList.contains('delete')) {
                this.delete();
            }
            if (element.classList.contains('result')) {
                this.result();
            }
        });
    };

    const pressEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.key === 'Enter') {
                this.result();
            }
        });
    };
    
    this.clear = () => {
        this.display.value = '';
    };

    this.delete = () => {
        const calc = this.display.value;
        this.display.value = calc.slice(0, -1);
    };

    this.result = () => {
        let calculation = this.display.value;
        try {
            const value = eval(calculation);
            if(calculation){
                this.display.value = value;
            }
        } catch(e) {
            alert('Cálculo inválido!');
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();
