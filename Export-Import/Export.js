// modules from ES6
/*
export const a = 10; //named export 
const b = 20;
const c = 40;

export default b;
*/

const b = 'abhinav';
const c = '40';

// module.exports = b
// module.exports = {
//     first: b,
//     second: c
// }

// module.exports = {b, c}
function printMyName(){
    console.log('my name is Abhinav');
}
printMyName();

module.exports = {b, c}

//  {
//     b:b,
//     c:c
//  }

// {
//     b:20,
//     c:40
// }

// console.log(module);
