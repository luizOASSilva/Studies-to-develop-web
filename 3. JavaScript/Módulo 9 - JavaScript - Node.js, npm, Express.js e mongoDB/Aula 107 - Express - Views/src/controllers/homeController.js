exports.home = (req, res) => {
    res.render('index'); // como o caminho já foi definido, passamos para o método render apenas o nome do arquivo que será lido na rota especificada
};