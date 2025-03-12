const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true})); // usando app.use para analisar os dados do formulário e disponibilizalos em req.body

app.get('/', (req, res) => {
    res.send('teste');
});

app.get('/teste/:idUsuarios?', (req, res) => { // quando utilizamos ":", estamos mapeando e enviando para "params"
    // params retorna um obj contendo o valor enviado a url
    // "?" (ponto de interrogação) torna o parâmetro opcional. Podemos acessar tanto a rota "/teste", quanto "/teste/123" por exemplo
    res.send(req.params.idUsuarios); // req.params pega qualquer valor digitado como parâmetro não opcional na url
    console.log(req.query); // req.query resgata dados da string de consulta da URL. São dados após o ponto de interrogação(?) e em pares de chave-valor separados por e comercial(&)

    // exemplo: http://localhost:3000/teste/?nome=Luiz ou http://localhost:3000/teste/?nome=Luiz&sobrenome=Silva
    // req.query() =      { nome:'Luiz'}                e                     {nome: 'Luiz', sobrenome: 'Silva'}  
}) ;

app.get('/postando', (req, res) => {
    res.send(`
        <form action="/postando" method="POST">
            <label for="nome"> Primeiro nome: </label>
            <input type="text" name="teste" id="nome">
            <button type="submit"> Enviar formulário </button>
        </form>
    `)
})

app.post('/postando', (req, res) => {
    console.log(req.body) // "req.body" devolve o valor no corpo de uma requisição POST. O nome da chave será o noome dado a propriedade "name", do input do formulário
    // saída = { teste: 'Luiz' } teste é o "name" do input
    res.send('Forumlário enviado');
})

app.listen(3000, () => {
    console.log('server run in: https://localhost:3000');
});
