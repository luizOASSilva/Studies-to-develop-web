exports.home = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            <label for="nome"> Primeiro nome: </label>
            <input type="text" name="teste" id="nome">
            <button type="submit"> Enviar formulário </button>
        </form>
    `)
};

exports.trataPost = (req, res) => {
    res.send('formulário enviado');
};
