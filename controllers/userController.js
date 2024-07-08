const User = require('../models/User');

const userController = {
  register: (req, res) => {
    const { username_user, password_user, type } = req.body;
    User.create({ username_user, password_user, type }, (err, result) => {
      if (err) throw err;
      res.send('Usuario registrado');
    });
  },
  // Otros métodos para CRUD
};

module.exports = userController;

