import Aluno from "../models/aluno";

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
    }
  }
}

export default new Home();
