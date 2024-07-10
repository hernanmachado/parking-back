const User = require('../models/User');

const userController = {
  register: (req, res) => {
    const { username_user, password_user, type } = req.body;
    User.create({ username_user, password_user, type }, (err, result) => {
      if (err) throw err;
      res.send('Usuario registrado');
    });
  },

  getUsers: (req, res) => {
    User.getAll((err, users) => {
      if (err) throw err;
      res.json(users);
    });
  },

  getUser: (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  },

  updateUser: (req, res) => {
    const { id } = req.params;
    const { username_user, type } = req.body;
    User.update(id, { username_user, type }, (err, result) => {
      if (err) throw err;
      res.send('Usuario actualizado');
    });
  },

  deleteUser: (req, res) => {
    const { id } = req.params;
    User.delete(id, (err, result) => {
      if (err) throw err;
      res.send('Usuario eliminado');
    });
  }
};

module.exports = userController;

