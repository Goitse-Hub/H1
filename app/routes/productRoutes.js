// src/routes/productRoutes.js
const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware.');

const router = express.Router();

// router.get('/', productController.getProducts);
// router.get('/:id', productController.getProductById);
// router.post('/', productController.createProduct);
// router.put('/:id', productController.updateProduct);
// router.delete('/:id', productController.deleteProduct);

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/',  productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
