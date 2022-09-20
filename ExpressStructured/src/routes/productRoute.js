const express = require('express');

const router = express.Router();

const {getProduct, shirtProduct, jeanProduct} = require('../controllers/productController')

router.get('/', getProduct);

router.get('/shirts', shirtProduct);

router.get('/jeans', jeanProduct);

router.all('*', (req, res) => {
    res.send('Product not found')
})

module.exports = router

