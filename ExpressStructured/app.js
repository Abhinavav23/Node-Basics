const express = require('express');
const app = express();

const cors = require('cors')

const productRouter = require('./src/routes/productRoute');
const cartRouter = require('./src/routes/cartRoute');
app.use(cors());

app.use('/test', express.static('./src/views/'));

// correct path for file ----> http://localhost:5800/product/product.css
// http://localhost:5800/test/

app.use('/product', productRouter);
app.use('/cart', cartRouter);

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.all('*', (req, res) => {
    res.send('Page not found')
})

const PORT = 5800

app.listen(PORT, () =>{
    console.log(`app running at ${PORT}`);
})






// products:
// https://flipkart.com/products/shirts ---> http://localhost:5800/products
// https://flipkart.com/products/jeans ----> http://localhost:5800/products/shirts
// https://flipkart.com/products/saree ----> http://localhost:5800/products/jeans


// cart:
// https://flipkart.com/cart/add ---> http://localhost:5800/products
// https://flipkart.com/cart/remove ----> http://localhost:5800/products/shirts
// https://flipkart.com/cart ----> http://localhost:5800/products/jeans

// profile
// https://flipkart.com/profile
