const express = require('express');
const path = require('path');

const app = express();

// console.log(__dirname);

const homeHtmlPath = path.join(__dirname, 'staticFiles/home.html');
const aboutHtmlPath = path.join(__dirname, 'staticFiles/about.html');
console.log(homeHtmlPath);

// let options = {
//     etag: true, //to generate e tag
//     dotfiles: 'ignore' | 'allow' | '',
//     maxAge: '12', 
//     setHeader: () =>{}
// }
app.use(express.static('staticFiles'));

app.get('/home', (req, res) => {
    // res.send('This is a home page ');
    // res.sendFile('/Users/abhinav/Desktop/NodeJS/Express/Public/home.html')
    res.sendFile(homeHtmlPath);
})

app.get('/about', (req, res) => {
    // res.send('This is a home page ');
    // res.sendFile('/Users/abhinav/Desktop/NodeJS/Express/Public/home.html')
    res.sendFile(aboutHtmlPath);
})

app.get('/data', (req, res) => {
    res.json({data: "abhinav"})
})

const PORT = 5700
app.listen(PORT, () => {
    console.log(`app has started at ${PORT}`);
})


// let obj = {
//     print: function(){

//     }
// }

// obj.print()