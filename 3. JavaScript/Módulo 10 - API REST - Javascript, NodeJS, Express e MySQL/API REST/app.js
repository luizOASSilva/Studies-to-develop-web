import { configDotenv } from "dotenv";
import './src/database/connection';
import express from "express";
import home from "./src/routes/home";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(configDotenv);
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', home);
  }
}

export default new App().app;
