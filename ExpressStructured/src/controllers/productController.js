const fetch = require('node-fetch');

const axios = require('axios');

const getProduct = async (req, res) => {
    // res.send('Product page')
    // res.sendFile('/Users/abhinav/Desktop/NodeJS/ExpressStructured/src/views/product/product.htm
    // req.body
    // const data = {
    //     username: 'Abhinav',
    //     role: 'Instructor',
    //     address: {
    //         pin: 5600199
    //     },
    //     numbers: [1,2,3,4,5]
    // }

    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then((res) => {
    //     return res.json();
    // })
    // .then((postData) => {
    //     console.log(postData);
    //     res.render('product/product.ejs', {data: postData});
    // });
    // .catch(() => {

    // })

    let userInfo = {
        username: 'Abhinav',
        password: '12345'
    }

    console.log('start');


    // try{
    //     const response = await fetch('https://jsonplaceholder.typicode.com/post', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(userInfo)
    //     });
    //     // console.log(response.ok);
    //     const data = await response.json();
    //     // console.log(data);
    //     // console.log('end');
    //     // res.send('data posted');
    //     res.render('product/product.ejs', {data});
    // } catch(e){
    //     res.render('product/product.ejs', {error: e.message});
    // }

    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
        res.render('product/product.ejs', {data: response.data});
    }catch(e){
        res.render('product/product.ejs', {error: e.message});
    }
    // {
    //     data: data
    // }

    // res.render('product/product.ejs', data);
    
}

const shirtProduct = (req, res) => {

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send('shirt page');
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