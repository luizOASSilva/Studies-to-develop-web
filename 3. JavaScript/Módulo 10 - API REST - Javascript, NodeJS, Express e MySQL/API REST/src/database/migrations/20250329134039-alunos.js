'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('alunos', {
      id: { // ('nome da tabela', { colunas })
        type: Sequelize.INTEGER, // tipo da coluna "INTEGER" (inteiro)
        allowNull: false, // não permite valores do tipo null
        autoIncrement: true, // incrementa automáticamente a coluna "id" de um em um
        primaryKey: true // define id como chave primária (chave de identificaçào única da tabela)
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false

      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false

      },
      nota: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      frequencia: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at:{
        type: Sequelize.DATE,
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('alunos');
  }
};
