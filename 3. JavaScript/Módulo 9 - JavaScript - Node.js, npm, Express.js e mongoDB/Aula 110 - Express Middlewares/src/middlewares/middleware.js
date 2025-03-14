module.exports = (req, res, next) => {
    console.log('Middleware da pasta middleware global');
    console.log(req.body.nome);
    if(req.body.nome) { // se existir algum valor em "req.body"
        console.log(`Vi que você postou ${req.body.nome}`);
        req.body.nome = req.body.nome.replace('Silva', 'Silva é um valor inválido'); // interceptando o valor inserido e enviado ao corpo da requisição. Se o valor conter silva, reescreve o "Luiz Silva não é um valor válidoo"
    }
    next()
}; // todas as requisiçoes e rotas passaram pelo middleware global
// middlewares globais operam em todas as requisições de todos os verbos. Seja POST, GET, DELETE, PUT
