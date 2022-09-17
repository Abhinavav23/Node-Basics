const express = require('express');

const app =  express();

// 3rd party middlwware

const cookies = require('cookie-parser');

const {checkUser}= require('./utils');
app.use(express.json()); //middleware to convert data and make it accessible to read
// app.use(checkUser);
app.use(cookies());

app.get('/', (req, res) => {
    console.log('reading cookies');
    console.log(req.cookies);
    // domain
    // maxAge -- time in ms
    // expires --- date
    // 
    res.cookie('username', 'abhinav', {path: '/cookie'}); //creationg a cookies
    // res.clearCookie('username', {path: '/cookie'});
    res.send('this is a site with cookies');

})

app.post('/friends', checkUser, (req, res) => {
    res.send('here is your friendList')
})

app.post('/messages', (req, res) => {
    console.log(req.query);
    res.send('here is your messages')
})

// app.use(checkUser);

app.post('/profile', (req, res) => {
    res.send('here is your profile')
})


const portNo = 5600
app.listen(portNo, () => {
    console.log(`swerver running at port ${portNo}`);
})

