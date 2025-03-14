exports.home = (req, res, next) => { // middleware
    console.log('respondendo o cliente'); // será chamado após o primeiro middleware com a mensagem "passei no middleware"
    res.render('index'); // res.render() termina a execução e entrega a página ao cliente
    console.log(`página da homeController: valor na req.session: ${req.session.nome}`); // req.session passa por todos os middlewares
    next(); // "next" chama o próximo middleware aninhado
};

exports.sendForms = (req, res) => {
    res.send(req.body);
    console.log(req.body);
};
