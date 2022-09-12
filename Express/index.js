// node js framework
// allows creating http methods or routes faster and elegantly
// minimal coding
// flexible 
// supports caching
// easy debugging

console.log('this is a express server');
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('This is a home page ');
})

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