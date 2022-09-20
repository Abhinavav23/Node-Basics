const express = require('express');

const router = express.Router();

const {getCart, getPrice, addToCart, removeFromCart} = require('../controllers/cartController');

router.get('/', getCart);

router.get('/add', addToCart);

router.get('/remove', removeFromCart);

router.get('/price', getPrice);

router.all('*', (req, res) => {
    res.send('not applicable')
});

module.exports = router