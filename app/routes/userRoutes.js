// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware.');

const router = express.Router();

router.get('/', authMiddleware.authenticate, userController.getUsers);
router.get('/:id', authMiddleware.authenticate, userController.getUserById);
router.put('/:id', authMiddleware.authenticate, userController.updateUser);
router.delete('/:id', authMiddleware.authenticate, userController.deleteUser);

module.exports = router;
