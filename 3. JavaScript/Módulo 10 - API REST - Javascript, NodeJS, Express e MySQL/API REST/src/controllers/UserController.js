import User from "../models/UserModel";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch(e) {
      res.status(400).json({error: e.message});
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch(e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const users = await User.findByPk(id);
      return res.json(users);
    } catch(e) {
        return res.status(400).json({error: e.message});
    }
  }
}

export default new UserController();
