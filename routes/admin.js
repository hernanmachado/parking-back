const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.dashboard); // Tengo que definir el dashboard en el controlador
router.get('/users', adminController.listUsers);
router.get('/users/:id/edit', adminController.editUser);
router.post('/users/create', adminController.createUser);
router.post('/users/:id/edit', adminController.updateUser);
router.get('/users/:id/delete', adminController.deleteUser);

module.exports = router;


