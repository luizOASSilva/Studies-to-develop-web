import { config } from "dotenv";
import './src/database/connection'
import express from "express";
import aluno from "./src/routes/aluno";
import user from "./src/routes/user";


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    config();
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', aluno);
    this.app.use('/users', user)
  }
}

export default new App().app;
