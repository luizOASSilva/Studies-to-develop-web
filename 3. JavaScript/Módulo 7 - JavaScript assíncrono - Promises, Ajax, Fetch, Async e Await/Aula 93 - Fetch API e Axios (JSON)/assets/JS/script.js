async function fetchAPI() {
    // ** UTILIZANDO FETCH API
    
    // try {
    //     const resp = await fetch('./assets/JSON/pessoas.json');

    //     if(resp.status !== 200) { // verifica se o status retornado pela promise é diferente de 200 "OK"
    //         throw new Error();
    //     }

    //     const json = await resp.json(); -> transformando a resposta da promise que busca o json em um array de objetos

    //     loadInPage(json); // enviando para LoadInPage o json

    // } catch(e) {
    //     console.log(e);
    // }

    // ** UTILIZANDO AXIOS

    axios('./assets/JSON/pessoas.json') // axios gera uma promise
        .then(resp => loadInPage(resp.data)) // caso a promise seja aceita, envia para a função loadInPage, o json retornado (um array de objetos)
        .catch(e => console.log(e)); // caso a promise gere um erro, este erro é apresentado no console
}

function loadInPage(json) {
    for(let obj of json) { // iterando sobre os valores dos arrays, "obj" recebe cada objeto do array de objetos "json"
        createTableRow(obj); // chama a função "createTableRows" e envia como argumento o objeto iterado por "for of"
    }
}

function createTableRow(obj) {
    tbody = document.querySelector('tbody'); // seleciona tbody no DOM

    tr = document.createElement('tr'); // cria um elemento tr
    tdNome = document.createElement('td'); // cria um elemento td para cada valor que será setado
    tdIdade = document.createElement('td');
    tdEstado = document.createElement('td');

    tdNome.innerHTML = obj.nome; // escreve em td, os valores das chaves
    tdIdade.innerHTML = obj.idade > 1 ? `${obj.idade} anos` : `${obj.idade} ano`; // verifica se ano é > que 1, caso seja, escreve-se anos no pluar. Caso não, escreve-se ano no singular
    tdEstado.innerHTML = obj.estado;

    tr.appendChild(tdNome); // setando os filhos das tags
    tr.appendChild(tdIdade);
    tr.appendChild(tdEstado);
    tbody.appendChild(tr);
}

fetchAPI();
