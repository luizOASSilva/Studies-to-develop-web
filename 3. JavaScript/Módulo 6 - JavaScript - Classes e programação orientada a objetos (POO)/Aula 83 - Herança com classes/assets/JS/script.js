class DispositivoEletronico { // criando a classe DispositivoEletronico
    constructor(nome) { // passando para sua constructor() o parâmetro "nome"
        this.nome = nome; // atribuindo nome do objeto ao valor recebido por parâmetro
        this.ligado = false; // toda instância do dispositivo estará inicialmente desligado
    }

    ligar() {
        if(this.ligado) { // se já estver ligado (true) 
            console.log(this.nome + ' já ligado');
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) { // false vira true por meio da negaçao "!"
            console.log(this.nome + ' já desligado');
            return
        }

        this.ligado = false;
    }
}

const disp1 = new DispositivoEletronico('Smartphone'); // instanciando a classe
console.log(disp1);
disp1.ligar();
console.log(disp1);
disp1.desligar();
disp1.desligar();

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) { // passamos ao parâmetro da constructor da classe filho os mesmo parâmetros presentes na classe pai
        // para criar novas propriedades presentes apenas para uma classe filho, utilizamos "super()" para recriar as propriedades criadas pela classe pai e depois criamos as novas chaves, ou métodos
        super(nome); // como parâmetro para super, devemos passar os parâmetros requeridos na classe pai. Como "DispositivoEletronico()" tem como parâmetro "nome", devemos atribuir ao parâmetro de "super()" o parâmetro "nome"
        
        this.cor = cor // criando propriedades que existem apenas nas classes "extends"
        this.modelo = modelo
    }
} // para criar uma classe filho, que gerará um objeto, de uma classe pai
// podemos utilizar extends, que herdará propriedades e métodos da classe pai

const smart1 = new Smartphone('Samsung', 'black', 's10'); // instanciando a classe filho, que herda as características da classe pai "DispositivoEletronico"
console.log(smart1);
smart1.ligar(); // smart1 possui o método em seu prototype, herdado da classe pai por meio de extends
console.log(smart1);

// **obs: uma boa prática para poo(programação orientada a objetos) é não acoplar tantas heranças em cadeia

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);

        this.temWifi = temWifi;
    }

    ligar() { // apesar de possuir um método idêntico na classe pai, "ligar()" em "Tablet" é único para si, ou para qualquer herança extendida dela mesmo
        console.log('Tablet ligado')
    }
}

const tablet1 = new Tablet('Ipad', true);
console.log(tablet1); 
console.log(tablet1.ligado); // quando chamamos um método que não foi atribuído especificamente no escopo daquele objeto filho, o JavaScript buscará nas heranças, o valor / método buscado
tablet1.ligar(); // invoca o método "ligar()", mas não altera a propriedade ligado. Pois o método foi sobrescrito
console.log(tablet1);

// em uma cadeia de herança, classes e objetos filhos herdam características de seus pais, porém os pais não herdam as características dos seus filhos