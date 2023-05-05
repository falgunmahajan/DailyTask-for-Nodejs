const express = require("express");
const users = require("./data.js");
const route = express();
route.use(express.json());
route.post("/home",(req,res)=>{
    res.json(users);
});
route.listen(3000);
console.log("The server is listening....");