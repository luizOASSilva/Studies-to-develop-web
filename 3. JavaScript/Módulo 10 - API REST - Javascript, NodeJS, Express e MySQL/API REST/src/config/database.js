require('dotenv').config();

// configurando os acessos à base de dados. Este arquivo está sendo utilizado pelo sequelize
module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  allowPublicKeyRetrieval: true,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}
