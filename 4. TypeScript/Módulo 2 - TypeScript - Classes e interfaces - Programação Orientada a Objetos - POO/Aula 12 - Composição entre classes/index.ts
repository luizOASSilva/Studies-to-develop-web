export class Carro { 
    private readonly motor: Motor = new Motor();

    ligar(): void { 
        this.motor.ligar();
    }

    acelerar(): void {
        this.motor.acelerar();
    }   

    parar(): void {
        this.motor.parar();
    }

    desligar(): void {
        this.motor.desligar();
    }
}

export class Motor { // motor depende de carro, se motor deixar de existir, carro também deixará de existir e assim 
    ligar(): void { 
        console.log('Motor está ligando...');
    }

    acelerar(): void {
        console.log('Motor está acelerando...');
    }   

    parar(): void {
        console.log('Motor está parando...');
    }

    desligar(): void {
        console.log('Motor está desligando');
    }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.desligar();
carro.parar();