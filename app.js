require('./xyz');
// import {sum} from './calculate.js'  //es way
// const obj = require('./calculate')
const {calculateMultiply,calculateSum} = require("./calculatee.js")


// destructuring on fly 
// const {sum,name} = require('./calculate')
// const a= 'akshitha';
// console.log(a);
const b = 1;
const c=2
//module by default protects its functions and varaibles from leaking, so you cannot access directly
// sum(b,c)
calculateSum(b,c);
calculateMultiply(b,c);
// obj.sum(b,c)
// console.log(obj.name)
// console.log(name)
//by default in package.json it is common, if we want we can write module and import directly

//common - non strict mode - es strict mode
// f= 4; error in es way, not error in common, it should be declared
