const http = require('http');

http.request({
    method: 'GET',
    host: 'localhost',
    port: 8000,
    path: '/req'
}, (res) => {
    console.log('response recieved');
    res.on('data', (chunk) => {
        console.log(chunk+'');
    })
})
.end()