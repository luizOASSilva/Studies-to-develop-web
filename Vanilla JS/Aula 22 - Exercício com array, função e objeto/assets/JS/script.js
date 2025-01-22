function meuEscopo () {
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');
    const pessoas = [];

    form.addEventListener('submit', recebeForm);

    function recebeForm(evt) {
        evt.preventDefault();

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const altura = form.querySelector('#altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            altura: altura.value
        });
        resultado.innerHTML += `<P> ${pessoas[pessoas.length - 1].nome} ${pessoas[pessoas.length - 1].sobrenome} ${pessoas[pessoas.length - 1].altura} </p>`;
    }  
}
meuEscopo();
