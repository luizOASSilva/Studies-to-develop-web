function meuEscopo () {
    const form = document.querySelector('#form');
    form.onsubmit = function(evt) {
        const pessoas = [];

        function recebeData() {
            console.log('passou aqui');
        }

        evt.preventDefault();
        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const altura = form.querySelector('#altura');

        form.addEventListener('submit', )
    }

    
}
meuEscopo();

