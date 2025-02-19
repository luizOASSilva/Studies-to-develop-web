function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando`);
        },
        comer () {
            console.log(`${this.nome} está comendo`);
        }
    }
    
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}



const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1);
console.log(p1.falar());
console.log(p1.comer());

