const express = require('express');
const { getProducts, getFeaturedProducts } = require('../controllers/productController');
const router = express.Router();

router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);

module.exports = router;
