// controllers/adminController.js

const User = require('../models/User');

const adminController = {
  // Método para crear usuario desde el panel de administración
  createUser: (req, res) => {
    const { username_user, password_user, type } = req.body;
    User.create({ username_user, password_user, type }, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al crear usuario');
      }
      res.send('Usuario creado exitosamente');
    });
  },

 //ver si estos metodos de admin alcanzan
};

module.exports = adminController;


