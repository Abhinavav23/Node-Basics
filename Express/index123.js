// node js framework
// allows creating http methods or routes faster and elegantly
// minimal coding
// flexible 
// supports caching
// easy debugging

// console.log('this is a express server');
const { json } = require('express');
const express = require('express');
const app = express();

// middleware will see later
app.use(express.json());


// W/"1d-uDC2LuOSN74kLIHWuCsVst3sU5s"
// W/"1d-uDC2LuOSN74kLIHWuCsVst3sU5s"


// W/"1a-TJyQLXLZLQuFLaIQ8c13q7lC7GM"
// W/"1a-TJyQLXLZLQuFLaIQ8c13q7lC7GM"

// W/"1c-MPFiyzRJXUhRnkIn1hRDmeoEGjg"

/*
app.get('/', (req, res) => {
    // res.status(203);
    // res.type('text/plain');
    // by default the status will be 200 and type will be text/html
    // res.send('This is a home page');

    // res.send('<h2>This is a home pag</h2>');

    // res.send({data: 'value'});

    // doesn't set the type automatically
    // res.type('text/html');
    // res.end('<h2>This is a home page</h2>');

    res.json({data: 'value in json'});
})
.post('/', (req, res) => {
    res.send('post request made successfully');
})

app.get('/about', (req, res) => {
    // res.send('11<h2>This is a about page</h2>');
    res.send({data: 'value'});
})

// {[()]}

// app.post('/', (req, res) => {
//     res.send('post request made successfully')
// })



app.get('/getFile', (req, res) => {
    // res.status(203);


    res.sendFile('file.txt', {root: __dirname});

    // res.sendFile('/Users/abhinav/Desktop/NodeJS/Express/file.txt')

    // res.sendFile('/Users/abhinav/Desktop/NodeJS/Node Basics/EventLoop/node2.png');
})

*/

app.get('/home', (req, res) => {
    console.log(req.headers);
    console.log(req.protocol);
    console.log(req.ip);
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send('<h3>This is a Home Page</h3>')
})
.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('account created successfully');
})





// console.log(__dirname);
const port = 3000;

app.listen(port, (err) => {
    if(err) console.log(err);
    console.log(`server started on ${port}`);
})


















// const obj = {
//     name: '',
//     argv: {

//     }
// }



// const  userInfo = {
//     username: 'sdvsdvfs',
//     password: 'sdfsdfv'
// }


// fetch('http://localhost:3000/', {method: 'POST'})
// .then(() => {

// })

// var a = 10
// let a = 10;


// "", ''