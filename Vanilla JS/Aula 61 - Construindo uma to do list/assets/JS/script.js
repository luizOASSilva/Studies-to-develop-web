const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const listcontainer = document.querySelector('#listContainer');

    const input = e.target.querySelector('#toDoInput');
    const text = input.value;

    if(!text){
        alert('Insira algum texto');
        return;
    }

    const element = createElement(text);
    listcontainer.appendChild(element);
})

function createElement(text) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.appendChild(p);
    return div;
}




