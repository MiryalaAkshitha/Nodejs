const a = 33;
const b= 555;
console.log("started")
const crypto = require("crypto");


crypto.pbkdf2Sync("password","salt",50000000,50,"sha512")
    console.log("Second Key generated sucessfully")

    crypto.pbkdf2("password","salt",5000,50,"sha512",(res,err)=>{
        console.log("First Key generated sucessfully")
    })
const multiply=(x,y)=>{
    const result = x*y;
    return result;
    }
    
    var c= multiply(a,b);
    console.log("Multiplication Result is:",c)