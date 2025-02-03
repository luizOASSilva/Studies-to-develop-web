function startCalculator(){
    return {
        display: document.querySelector('#display'),
        start() {
            this.click();
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

        clearDisplay() {
            this.display.value = '';
        },

        result() {
            const calc = this.display.value;
            const result = eval(calc);
            if(Number(result)) {
                this.display.value = result;
            }else {
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
