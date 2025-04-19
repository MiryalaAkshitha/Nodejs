console.log("Hello This is starting");
const fs= require("fs");
const https = require("https")
const a = 7778888;
const b = 88888;

https.get('https://dummyjson.com/products/1',(res)=>{
    console.log("Data Fetched Successfully");
})

setTimeout(()=>{
    console.log("Timer Ran Successfully");
},5000)

fs.readFile("./file.txt","utf8",(err,data)=>{
console.log("File Reading done for:", data)
})
//this function will do everything in sync i.e howmuchever time it takes to fetch data main thread will be blocked
// fs.readFileSync("./file.txt","utf8",(err,data)=>{
//     console.log("File Reading done for:", data)
//     })
    
const multiply=(x,y)=>{
const result = x*y;
return result;
}

var c= multiply(a,b);
console.log("Mutiplcation Result is:",c)