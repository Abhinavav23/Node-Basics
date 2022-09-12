const http = require('http');
const fs  = require('fs');

const app = http.createServer((req, res) => {
    // fs.readFile('./largeFile.txt', 'utf-8', (err, file) => {
    //     res.end(file)
    // })

    // const file = fs.createReadStream('./largeFile.txt', {highWaterMark: 10000, encoding: 'utf-8'});
    // file.on('open', (err) => {
    // if(err) console.log(err);
    //     file.pipe(res);
    // })
    fs.createReadStream('./largeFile.txt', {highWaterMark: 10000, encoding: 'utf-8'}).pipe(res);
})

app.listen(8000);