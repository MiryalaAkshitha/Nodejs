console.log('Sum Module Executed'); //this will be executed
function calculateMultiply (a,b){
    console.log(a*b)
}
// export function sum (a,b){
//     console.log(a+b)
// }
const name = 'aks'
// module.exports = {name:name,sum:sum}
// same as above 
module.exports = {calculateMultiply} 
//common js module