console.log("Start Of SetTimeout")

const a= 66878;
const b = 89776;
setTimeout(()=>{
    console.log("set time out run after 0ms")
},0)
setTimeout(()=>{
    console.log("set time out run after 5ms/5sec")
},50000)

const multiply=(x,y)=>{
const result = x*y;
return result
}
var c = multiply(a,b)
console.log("Mulpilication result is", c)