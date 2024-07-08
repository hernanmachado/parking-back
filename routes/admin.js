const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Ejemplo de ruta que necesita un controlador definido
router.get('/', adminController.dashboard);
// Ejemplo de otra ruta que necesita un controlador definido
router.get('/users', adminController.listUsers);
// Ejemplo de ruta para crear usuario
router.post('/users/create', adminController.createUser);
// Otras rutas de administración que puedas tener

module.exports = router;


