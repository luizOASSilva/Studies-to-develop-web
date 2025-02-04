function startCalculator(){
    return {
        display: document.querySelector('#display'),
        start() {
            this.click();
            this.enter();
        },

        click() {
            document.addEventListener('click', e => {
                const element = e.target;
                if (element.classList.contains('clear')) {
                    this.clearDisplay();
                } 
                if (element.classList.contains('result')) {
                    this.result();
                } 
                if (element.classList.contains('delete')) {
                    this.deleteOne();
                }
                if (element.classList.contains('btn')){
                    this.display.value += element.innerText;
                } 
            });
        },

        enter() {
            document.addEventListener('keyup', e => {
                if (e.key === 'Enter') this.result();
                else return;
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        result() {
            const expression = this.display.value;
            try{
                const result = eval(expression);
                if(result){
                    this.display.value = result;
                    return;
                }
            }catch(e){
                alert('Cálculo inválido');
                return;
            } 
        },

        deleteOne() {
            const calc = this.display.value;
            this.display.value = calc.slice(0, -1);
        }
    }
}

const calculator = startCalculator();
calculator.start();
