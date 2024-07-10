const User = require('../models/User');

const adminController = {
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

// Metodo para crear el dashboard
dashboard: (req, res) => {
  res.render('admin/dashboard');
},

//listar usuarios
  listUsers: (req, res) => {
    User.getAll((err, users) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al obtener la lista de usuarios');
      }
      res.render('admin/user', { users });
    });
  },

  editUser: (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, user) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al obtener usuario');
      }
      res.render('admin/edituser', { user });
    });
  },

  updateUser: (req, res) => {
    const { id } = req.params;
    const { username_user, type } = req.body;
    User.update(id, { username_user, type }, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al actualizar usuario');
      }
      res.send('Usuario actualizado exitosamente');
    });
  },

  deleteUser: (req, res) => {
    const { id } = req.params;
    User.delete(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al eliminar usuario');
      }
      res.send('Usuario eliminado exitosamente');
    });
  }
};

module.exports = adminController;

