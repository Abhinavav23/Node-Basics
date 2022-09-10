const fs = require('fs');

// fs.mkdir('./Filesystem/file', (err) => {
//     if(err){
//         console.log(`Error Occurred: \nErr Code: ${err.code} \nErr message: ${err.message}`);
//     }
// })

// fs.mkdir('./Filesystem/file/fileInner',{recursive: true}, (err) => {
//     if(err){
//         console.log(`Error Occurred: \nErr Code: ${err.code} \nErr message: ${err.message}`);
//     }
// })

// fs.readdir('./Filesystem', (err, files) => {
//     if(err){
//         console.log(`Error Occurred: \nErr Code: ${err.code} \nErr message: ${err.message}`);
//     } else{
//         console.log('reading directory');
//         console.log(files);
//     }
// })

// fs.rm('./Filesystem/file', {recursive: true}, (err) => {
//     if(err){
//         console.log(`Error Occurred: \nErr Code: ${err.code} \nErr message: ${err.message}`);
//     }
// })

// fs.writeFile('./Filesystem/fileAgain.txt', 'Hi this is third line', (err) => {
//     if(err){
//         console.log(`Error Occurred: \nErr Code: ${err.code} \nErr message: ${err.message}`);
//     }
// })

// fs.appendFile('./Filesystem/file.txt', '\nHi this is third line', (err) => {
//     if(err){
//         console.log(`Error Occurred: \nErr Code: ${err.code} \nErr message: ${err.message}`);
//     }
// })

// fs.open('./Filesystem/file1.txt', 'a', (err, file) => {
//     if(err){
//         console.log(`Error Occurred: \nErr Code: ${err.code} \nErr message: ${err.message}`);
//     } else{
//         console.log(file);
//         // fs.readFile(file)
//     }
// })

// fs.readFile('./Filesystem/file.txt', 'utf-8', (err, file) => {
//     if(err){
//         console.log(`Error Occurred: \nErr Code: ${err.code} \nErr message: ${err.message}`);
//     } else{
//         console.log(file);
//     }
// })

fs.unlink('./Filesystem/file1.txt', (err) => {
    if(err){
        console.log(`Error Occurred: \nErr Code: ${err.code} \nErr message: ${err.message}`);
    }
})

// copyfile, rename, isFile, isDirectory, stat

// CRUD 
// for Dirs
// R --> 
