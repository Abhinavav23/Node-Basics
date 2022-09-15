const express = require('express');

const app =  express();

const {checkUser}= require('./utils');
app.use(express.json()); //middleware to convert data and make it accessible to read
app.use(checkUser);

app.post('/friends', (req, res) => {
    res.send('here is your friendList')
})

app.post('/messages', (req, res) => {
    res.send('here is your messages')
})

app.use(checkUser);

app.post('/profile', (req, res) => {
    res.send('here is your profile')
})

const portNo = 5600
app.listen(portNo, () => {
    console.log(`swerver running at port ${portNo}`);
})

