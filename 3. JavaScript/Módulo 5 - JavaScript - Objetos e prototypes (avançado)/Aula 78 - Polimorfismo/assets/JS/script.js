// polimorfismo é a capacidade de um método de um objeto, mesmo após herdado, se comportar de maneira diferente para cada instância

function Conta(num, agencia, saldo) { // criando a função geradora
    this.num = num;
    this.agencia = agencia;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) { // função setada no prototype de "Conta()", para realizar saques. Será herdada por toda instância
    if(valor > this.saldo) {
        console.log('Saldo insuficiente');
        return;
    }

    this.saldo -= valor;
    console.log(this.saldo)
}

Conta.prototype.depositar = function(valor) { // função setada no prototype da função geradora "Conta()", Será herdada por toda instância
    this.saldo += valor; // adiciona ao saldo, o valor depositado 
}

function CC(num, agencia, saldo, limite){ // cria uma função geradora que herdará as características de "Conta()"
    Conta.call(this, num, agencia, saldo); // chama o objeto e atribui as propriedades para a função
    this.limite = limite; // atribui a propriedade limite como exclusiva para "CC()"
}
CC.prototype = Object.create(Conta.prototype); // retornando um objeto, com o prototype da função construtora que será herdado
CC.prototype.constructor = CC; // define o construtor, como sendo o construtor de "Conta()" para o prototype

CC.prototype.sacar = function(valor) { // podemos realizar o polimorifsmo de sobrescrita, onde reescrevemos o método para a instância
    if(valor > (this.saldo + this.limite)) { // nesse caso, a conta do tipo corrente, terá um limite adicional para saques de 100 reais
        console.log('Saldo insuficiente');
        return;
    }

    this.saldo -= valor; // diminui do saldo, o valor de saque
}

function CP(num, agencia, saldo){
    Conta.call(this, num, agencia, saldo); // "this" se torna essencial para a herança do objeto
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new CC(100023, 10, 0, 100);
cc.depositar(10)
cc.sacar(110); // saca normalmente com o limite adicional, 100(limite) + 10(depositado) = 110
console.log(cc);

const cp = new CP(100023, 10, 0);
cp.depositar(10); 
cp.sacar(11); // não permite o saque com o limite adicional, saque de 10 reais depositado na chamada depositar(10)
console.log(cp);

// **obs: devido ao polimorfismo de sobrescrita, podemos observar diferentes comportamentos para o mesmo método, em duas instâncias diferentes(CC() e CP())
// em cp, podemos sacar apenas o valor limitado ao saldo da conta
// já em cc, podemos sacar o valor limitado ao saque com limite adicional