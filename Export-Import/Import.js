// import { a } from './Export';
// import abhinav from './Export';

const abhi = require('./Export');

// const {b} = require('./Export');

console.log(abhi); // {20,40}

console.log(abhi.b); // 20
console.log(abhi.c); // 40

// console.log(b);
// console.log(c);

// 1. 20, 40
// 2. 40, 20
// 3. 20, 20
// 4. 40, 40
// 5. nothing