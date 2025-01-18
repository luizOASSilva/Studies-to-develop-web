// objeto literal
const pessoa = { // objetos agrupam propriedades que armazenam dados
    nome: 'Luiz',
    sobrenome: 'Silva',
    idade: 19
};

console.log(pessoa);
console.log(pessoa.nome); // para acessar as propriedades de um objeto, chama-se o nome do objeto + "." + nome da propriedade

function criaPessoa (nome, sobrenome, idade){ // podemos criar uma função que cria um objeto, para isso devemos passar parâmetros para serem enviados dados ao objeto e setados em suas propriedades
    return { // a função retorna um objeto com os parâmetros setados nas suas propriedades
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }; 
};

/* Ou pode ser criada dessa maneira, onde a própria engine do Javascript já entende a atribuição à propriedades de nomes iguais

 criaPessoa (nome, sobrenome, idade){ // podemos criar uma função que cria um objeto, para isso devemos passar parâmetros para serem enviados dados ao objeto
    return { // a função retorna um objeto com os parâmetros setados 
        nome,
        sobrenome,
        idade
    }; 
};
*/

const pessoa1 = criaPessoa('Helena', 'Daher', 18); // quando enviamos valores ao parâmetro, denominamos ele como argumentos
const pessoa2 = criaPessoa('Márcio', 'Soares', 58);
console.log(pessoa1);
console.log(pessoa1.sobrenome);

const cachorro1 = {
    nome: 'Ayla',
    raca: 'vira-lata',
    idade: 10,

    late () { // podemos criar uma função função dentro de um objeto. Nesse caso a chamamos de "método"
        console.log('AuAu')
    }
};

cachorro1.late(); // para chamar o método do objeto utilizamos o nome do objeto + "." + o nome do método ("late")

const cachorro2 = {
    nome: 'Ayla',
    raca: 'vira-lata',
    idade: 10,

    late () { // podemos criar uma função função dentro de um objeto. Nesse caso a chamamos de "método"
        console.log(`${this.nome} tem ${this.idade} anos`); // this faz referência ao próprio escopo do método e do objeto, resgatando dados de dentro dele mesmo
    },

    incremendaIdade () {
        ++this.idade; // incremente idade na propriedade idade
    }
};

cachorro2.late();
cachorro2.incremendaIdade(); // incrementa 1 ano na idade atual do cachorro
cachorro2.late(); // apresenta a idade já incrementada