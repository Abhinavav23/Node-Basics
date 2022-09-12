const http = require('http');

const app = http.createServer((req, res) => {
    console.log(req.url); //   /req
    // console.log(res);
    console.log(req.headers.host);
    // res.write('got a connection');
    if(req.url === '/req'){
        res.write('this is response1');
        res.write('this is response2');
    }
    if(req.url === '/') {
        res.write('<h1>Home Page</h1>');
    }
    if(req.url === '/about') {
        res.write('<h1>About Page</h1>');
    }
    res.end('<h3>End of response</h3>')
});

app.addListener('error', () => {
    console.log('an error occured');
})

// app.emit('error');

app.listen(8000);
