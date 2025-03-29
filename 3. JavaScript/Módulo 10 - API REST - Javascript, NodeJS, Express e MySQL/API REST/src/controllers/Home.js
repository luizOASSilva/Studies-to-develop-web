import Aluno from "../models/Aluno";

class Home {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'Luiz',
        sobrenome: 'Silva',
        email: 'luizotavioassilva@gmail.com',
        nota: 7.5,
        frequencia: 0.80,
      });
      res.json(novoAluno);
    }
    catch(e) {
      console.log(e);
      res.status(400).json({error: e.message});
    }
  }
}

export default new Home();
