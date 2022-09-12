const path = require('path');


// console.log(path);

const path1DirName = path.dirname('/Users/abhinav/Desktop/NodeJS/Globals/global.js');
console.log(path1DirName);

// const path1BaseName = path.basename('/Users/abhinav/Desktop/NodeJS/Globals/global.js');
const path1BaseName = path.basename('/Users/abhinav/Desktop/NodeJS/Globals/global.js', '.js');
console.log(path1BaseName);

const path1ExtNAme = path.extname('/Users/abhinav/Desktop/NodeJS/Globals/global.js');
console.log(path1ExtNAme);


const joinPathNAme = path.join('/Users/abhinav/Desktop/NodeJS', '/Path', '/path.js');
console.log(joinPathNAme);

const joinRelativePaths = path.join('/Users/abhinav/Desktop/NodeJS/Path/path.js', '../', '../', 'Globals/global.js')
console.log(joinRelativePaths);

const parsedPath = path.parse('/Users/abhinav/Desktop/NodeJS/Path/path.js')
console.log(parsedPath);


const formattedPath = path.format(parsedPath)
console.log(formattedPath);

// from and to
const relativePath = path.relative('/Users/abhinav/Desktop/NodeJS/Path/Path.js', 
'/Users/abhinav/Desktop/NodeJS/Globals/global.js')

const joinedPath = path.join('/Users/abhinav/Desktop/NodeJS/', '../', './Globals/global.js')
console.log(joinedPath);

// console.log(relativePath);

// ../../Globals/globals.js


// const userDir = '/Users/abhinav/Desktop/NodeJS/User/'

// /Users/abhinav/Desktop/NodeJS/User/abhinav.png
// const username = 'abhinav'


// /Users/abhinav/Desktop/NodeJS/Path/path.js/Globals/global.js ----> 
// /Users/abhinav/Desktop/NodeJS/Path/path.js/global.js ----> 1
// /Users/abhinav/Desktop/NodeJS/Path/Globals/global.js ----> 6
// /Users/abhinav/Desktop/NodeJS/Globals/global.js ----> 14


// absolute path
// relative path

// const a = 10; //
// const b = a+10;



// import {path} from 'path';
// import path from 'path';



// Methods Names
// isAbsolute
// normalize
// resolve ---> takes an array of values
