const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para mostrar el formulario de login
router.get('/login', (req, res) => {
  res.render('login'); // Vista llamada 'login.hbs'
});

// Ruta para manejar el login
router.post('/login', authController.login);

module.exports = router;

