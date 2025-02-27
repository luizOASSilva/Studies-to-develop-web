document.addEventListener('click', e => { // evento para ler qualquer clique no documento
    const el = e.target; // captura o elemento clicado por meio do seu target
    const tag = el.tagName.toLowerCase(); // envia à variável tag o valor como sendo a tag capturada pelo evento de clique

    if(tag === 'a') {
        e.preventDefault(); // prevenindo o comportamento padrão do evento de recarregar a página
        FetchAPI(el); // envia à função "loadPage()" o elemento clicado como argumento
    }
});

async function FetchAPI(el) { // gerando uma função assíncrona
    const href = el.getAttribute('href'); // pegando o link presente em "href" do elemento "a" clicado

    try{ // testa um bloco de código. Caso capture um erro, redireciona para "catch()"
        const response = await fetch(href) // "fetch()" automaticamente gera uma "promise()". Desta maneira fetch deve ser obrigatoriamente utilizado com a sintaxe "await()". Fetch puxa uma requisição e atribui o seu resultado à variável "response"
        const html = await response.text(); // "text()" gera outra promise, esta será responsável por devolver o valor de resultado e atribuir à uma variável. Transforma o resultado da promise retornada por "responsse" em um texto

        // se o status do response for diferente de 200, significa que a requisição falhou
        if (response.status !== 200) throw new Error();
            
        setResult(html); // chama a função setResult e passa como argumento o texto retornado pela promise e formatado por "text()"
    } catch(e) { // caso haja algum erro no bloco, catch é acionado
        console.error(e); // apresenta o erro no console
    }
}

function setResult(html) {
    const result = document.querySelector('.result'); // atribui a "result" o "responseText()" retornado pela promise();
    result.innerHTML = html; // escreve na div o valor atribuido à variável resultado
}
