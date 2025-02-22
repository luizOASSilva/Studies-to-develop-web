class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: function() {
                return cpf.replace(/\D+/g, '');
            },
        })
    }

    valida() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);

        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        const novoCPF = cpfParcial + digito1 + digito2; 

        return novoCPF === this.cpfLimpo;
    }

    criaDigito(value) {
        const arrCPF = Array.from(value);

        let sub = arrCPF.length + 1;

        const total = arrCPF.reduce((acumulador, valor) => {
            acumulador += (Number(valor) * sub);
            sub--;
            return acumulador;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }
}

const cpf = new ValidaCPF('511.598.868-22');
if(cpf.valida()){
    console.log('CPF válido');  
}
else {
    console.log('CPF inválido');
}
