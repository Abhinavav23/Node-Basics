const getCart = (req, res) => {

    res.render('cart/cart.ejs');
    // res.send('This is a cart page with all the cart products')
}

const addToCart = (req, res) => {
    res.send('added to cart')
}

const removeFromCart = (req, res) => {
    res.send('removed from cart')
}

const getPrice = (req, res) => {
    res.send('total price of cart')
}

module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    getPrice
}