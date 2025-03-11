const express = require('express'); // express é um microframework para trabalhar com um backend
const app = express(); // instanciando express para a variável app

// verbos HTTP definem qual ação deve ser realizada do lado do servidor. Dependendo do verbo, o sevidor pode dar uma resposta diferente

// GET é utilizado para obter dados de um determinado recurso, como listagens. buscas e entre outras.
// POST são mais utilizadas para enviar informações para serem processadas, como criação de recurso, produto ou envio de dados ao banco de dados

//         criar   ler   atualizar  apagar
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         POST    GET   PUT        DELETE

// https://meusite.com <- GET -> Entregue a página /
// https://meusite.com/sobre <- GET -> Entregue a página /sobre
// https://meusite.com/contato <- GET -> Entregue a ágina /contato

app.get('/', (req, res) => { // "app.get" mostra uma definição de rota. O método especifica uma função de retorno de chamada que será invocada sempre que exista uma solicitação HTTP GET com um caminho "/" relativo a raíz do site
    res.send(`
    <form action="/" method="POST">
        <label for="nome"> Primeiro nome: </label>
        <input type="text" name="text" id="nome">
        <button type="Enviar "> Enviar formulário </button>
    </form>
    `); // enviando resposta para a requisição em uma porta específica
});

app.post('/', (req, res) => { // "app.post" envia dados ao servidor
    res.send('Formulário recebido'); // escreve "formulário recebido ao enviar fomrulário"
})

app.get('/contato', (req, res) => {
    res.send('Página de contato');
})

app.listen(3000, () => {console.log('Servidor executando na porta 3000')}); // escutando a porta específica, criando o servidor
