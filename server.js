const http = require("http");
const server = http.createServer((req,res)=>
{
    if(req.url=="/home")
    {
        res.write("Hello World");
        res.end();
    }
})
server.listen(3000);
console.log("The port is listening...");