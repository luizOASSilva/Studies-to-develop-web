import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) { // em "init" definimos os campos e as opções que serão definidos os dados
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      nota: Sequelize.FLOAT,
      frequencia: Sequelize.FLOAT
    }, {
      sequelize,
    });
  }
}
