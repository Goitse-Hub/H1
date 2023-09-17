// src/routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
//const purchaseController = require('../controllers/purchaseController');

const router = express.Router();

router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get('/users', authController.getUsers);
router.post('/register', authController.register);
router.post('/login', authController.login);
router.put('/users/:id', authController.updateUser);
router.delete('/users/:id', authController.deleteUser);


module.exports = router;
