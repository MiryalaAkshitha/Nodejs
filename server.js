const http = require("http");
const server = http.createServer(function (req,res){
    if(req.url==="/check"){
        res.end("This end point has no data")
    }
    else{
    res.end("HELLO GUYS")
    }
})
server.listen("7777");