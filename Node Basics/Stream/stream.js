const fs = require('fs');

console.log('start');
/*
let i = 0;
while(i<1000000){
    // fs.appendFile('./largeFile.txt', `Hi this is large File line no-${i}\n`, (err) => {
    //     if(err) console.log(err);
    // })
    i++
    fs.appendFileSync('./largeFile.txt', `Hi this is large File line no-${i}\n`);
}

console.log('end');

fs.stat('./largeFile.txt', (err, file) => {
    console.log(file);
})
*/

// fs.readFile('./largeFile.txt', 'utf-8', (err, file) => {
//     if(err) console.log(err);
//     console.log(file);
// })

// 40 mb file / 64 kb --> 

// chunk created by default in readfileStream is of 64 kb
// const largeFileReadStream = fs.createReadStream('./largeFile.txt');
// largeFileReadStream.on('data', (chunk) => {
//     console.log(chunk.length);
// })



const largeFileWriteStream = fs.createWriteStream('./largeFile.txt');
let i = 0;
while(i<10000)
{
    largeFileWriteStream.write(`Hi this is small file line no ${i}\n`)
    i++
}





// readable stream
// writable stream
// duplex stream
// transform


// Readable stream

// 10 ------> 10



// let x =5
// function test(){
//     let a = 10;
//     console.log(a);
//     console.log(a);
//     function test1(){
//         let x = 9
//         var a = 20
//         console.log(a);
//     }
// }



