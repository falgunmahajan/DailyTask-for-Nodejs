const express = require("express");
const users = require("./data.js");
const app = express();
app.listen(3000);
console.log("The server is listening");
app.get("/home",(req,res)=>
{
    const queries = req.query;
    console.log(queries);
    const user=[...users];
    const userName=user.filter((item)=>item.college===queries.college);

    if(!userName)
    {
        res.json(user);
    }
    else
    {
        res.json(userName);
    }
})