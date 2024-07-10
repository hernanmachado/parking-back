const User = require('../models/User');
const bcrypt = require('bcrypt');
const session = require('express-session');

const authController = {
  login: (req, res) => {
    const { username_user, password_user } = req.body;
    User.findByUsername(username_user, (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        return res.status(401).send('Usuario no encontrado');
      }
      const user = result[0];
      bcrypt.compare(password_user, user.password_user, (err, match) => {
        if (err) throw err;
        if (match) {
          req.session.userId = user.id_user;
          req.session.userType = user.type;
          if (user.type === 'admin') {
            res.redirect('/admin');
          } else {
            res.redirect('/map');
          }
        } else {
          res.status(401).send('Contraseña incorrecta');
        }
      });
    });
  },
  
};

module.exports = authController;

