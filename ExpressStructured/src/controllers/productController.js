const getProduct = (req, res) => {
    // res.send('Product page')
    // res.sendFile('/Users/abhinav/Desktop/NodeJS/ExpressStructured/src/views/product/product.htm
    req.body
    const data = {
        username: 'Abhinav',
        role: 'Instructor',
        address: {
            pin: 5600199
        }
    }
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then((res) => {
    //     return res.json()
    // })
    // .then((postdata) => {
    //     res.render('product/product.ejs', {data: postdata});
    // });

    res.render('product/product.ejs', {data: [1,2,3,4,5]});
    
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


// function calcultte(a){
//     return a*109
// }

// const result  = calcultte(a);

// console.log(result); //showing things
let username = 'Abhinav'
// <div>{username}</div>