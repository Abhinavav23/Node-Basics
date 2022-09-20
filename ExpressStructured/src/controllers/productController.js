const getProduct = (req, res) => {
    // res.send('Product page')
    // res.sendFile('/Users/abhinav/Desktop/NodeJS/ExpressStructured/src/views/product/product.html');
    res.render('product/product')
}

const shirtProduct = (req, res) => {
    res.send('shirt page')
}

const jeanProduct = (req, res) => {
    res.send('jean Product')
}

module.exports = {
    getProduct,
    shirtProduct,
    jeanProduct
}
