// src/routes/purchaseRoutes.js
const express = require('express');
const purchaseController = require('../controllers/purchaseController');

const router = express.Router();


router.post('/purchase', purchaseController.purchaseProduct);

module.exports = router;
