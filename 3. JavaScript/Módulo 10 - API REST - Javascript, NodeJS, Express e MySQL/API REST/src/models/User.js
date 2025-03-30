import Sequelize, { Model }  from "sequelize";
import bcryptjs from 'bcryptjs'

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'E-mail inválido'
          }
        }
      },
      password_hash: Sequelize.STRING,
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Campo senha deve ter entre 6 e 50 caracteres'
          }
        } // campo do tipo "VIRTUAL" não exite na base de dados
      }
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async user => { // ganchos (hooks) permitem que sejam executadas fun'~oes específicas em determinados pontos do ciclo de vida de uma instância, ou consulta
      user.password_hash = await bcryptjs.hash(user.password)
    });

    return this;
  }
}
