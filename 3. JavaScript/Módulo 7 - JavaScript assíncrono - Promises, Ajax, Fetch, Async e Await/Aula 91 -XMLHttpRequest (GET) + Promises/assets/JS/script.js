const request = obj => {
    return new Promise((resolve, reject) => { // lançando uma "promise()" 

        const xhr = new XMLHttpRequest(); // instanciando o objeto XMLHttpRequest. Responsável por requisições AJAX(Asynchronous JavaScript and XML)
        xhr.open(obj.method, obj.url, true); // método "open()" inicializa uma requisição. Método open() tem como parâmetros (method(GET, POST, PUT ou DELETE), url, async(true ou false), user, password)
        xhr.send(null); // enviando dados ao servidor, "send()" pode aprensentar "null" em caso de requisições do tipo "GET"
        
        // method: método que será utilizado para realizar a requisição. Pode conter o vaslor "GET" que busca dados do servidor, "POST" responsável por enviar dados ao servidor, "PUT" atualiza os dados do servidor e "DELETE" que remove os dados do servidor
        // url: url que será direcionada a requisição
        // async: se a requisição será assíncrona ou não(true ou false)
        // user: usuário
        // password: senha
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) { // testando se o retorno da requisição é um status positivo, caso seja, a requisição foi aprovada
                resolve(xhr.responseText); // enviando ao método "resolve()" da promise, o texto de resposta retornado pela requisição, podendo ser do tipo String, JSON entre outros
            } else { // caso a requisição falhe, retorna o texto de erro
                reject(xhr.statusText); // retornando o texto de erro da requisição para reject da promise
            }
        }); // capturando o evento de "load" (carregamento) da requisição
    });
};

document.addEventListener('click', e => { // evento para ler qualquer clique no documento
    const el = e.target; // captura o elemento clicado por meio do seu target
    const tag = el.tagName.toLowerCase(); // envia à variável tag o valor como sendo a tag capturada pelo evento de clique

    if(tag === 'a') {
        e.preventDefault(); // prevenindo o comportamento padrão do evento de recarregar a página
        loadPage(el); // envia à função "loadPage()" o elemento clicado como argumento
    }
});

async function loadPage(el) { // async function, são funções assíncronas que dependem e retronam uma promise que requisitará um servidor
    const href = el.getAttribute('href'); // pegando o valor do atributo heref do elemento recebido por parâmetro

    const config = { // criando o objeto de configuração. Objeto esse que será enviado à requisição feita por meio do "open"
        method: 'GET', // setando o tipo de requisição. GET recupera os dados do servidor
        url: href // definindo a url que a requisição será operada, nesse caso o valor de "href" na tag "a" anteriormente clicada
    };
    
    try { // try testa, caso haja um erro dentro de seu escopo, sua execução é abortada e catch assume o tratamento do erro
        const response = await request(config); // await pausa uma função async e aguarda a resolução de um promise, nesse caso o retorno da função "loadResult()"
        loadResult(response);
    } catch(e) { // caso try apresente algum erro
        console.log(e);
    } 
}

function loadResult(response) {
    const result = document.querySelector('.result'); // atribui a "result" o "responseText()" retornado pela promise();
    result.innerHTML = response; // escreve na div o valor atribuido à variável resultado
}
