const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.register);
// Otras rutas de CRUD de usuarios

module.exports = router;


