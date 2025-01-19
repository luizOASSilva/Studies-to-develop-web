function meuEscopo () {
    const form = document.querySelector('#form');
    form.onsubmit = function(evt) {
        evt.preventDefault();
    }
}
meuEscopo();

