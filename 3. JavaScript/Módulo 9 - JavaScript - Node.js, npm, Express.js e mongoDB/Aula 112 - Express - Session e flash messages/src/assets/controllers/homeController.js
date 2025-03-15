exports.home = (req, res) => {
    req.flash('error', 'Hello world'); // criando uma "flash-message" e atribuindo o seu rótulo como error
    console.log(req.flash('error')); // acessando a flash message que deixará de existir no momento em que é lida. Mesmo após encerrar, req.flash pode ser chamado, se criado em outra sessão
    
    req.session.usuario = { nome: '<strong> Luiz </strong>', estaLogado: true}; // cria uma session e envia um objeto contendo pares de valor-chave
    console.log(req.session.usuario); // mesmo após encerrando o programa ou saindo do site, a session continua salva
    
    res.locals.usuario = req.session.usuario; // criando uma variável local que poderá ser embebedada no ejs especificado pela rota
    
    res.locals.teste = 'testando variável';

    res.locals.nomes = ['Luiz', 'José', 'Clarisse', 'Milena'];

    res.render('index', { // podmos enviar variáveis diretamente como parâmetro de "render()" essas variáveis podem ser acessadas pelo ejs especificado na rota
        idade: 19
    });
};  
