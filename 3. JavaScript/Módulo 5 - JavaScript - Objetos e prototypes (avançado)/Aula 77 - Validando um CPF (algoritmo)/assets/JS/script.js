function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function() {
    // if(typeof this.cpfLimpo === 'string') return false;
    // if(this.cpfLimpo.lenght !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCPF = cpfParcial + digito1 + digito2;

    return novoCPF === this.cpfLimpo ? true : false
}

ValidaCPF.prototype.criaDigito = function(value) {
    const arrCPF = Array.from(value);
    console.log(arrCPF);

    let sub = arrCPF.length + 1;

    const total = arrCPF.reduce((acumulador, val) => {
        acumulador += (Number(val) * sub);
        sub--;
        return acumulador;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

const cpfLimpo = new ValidaCPF('705.484.450-52');

if(cpfLimpo.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}
