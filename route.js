const express = require("express");
const users=require("./data.js")
const route= express()



route.get('/', (req,res)=>{
    console.log('this is homepage');
    res.send('this is current page')
})

route.get('/home/:userId',(req,res)=>
{
    const userid=req.params.userId;
    const user=[...users];
    const userName=user.find((item)=>item.id===Number(userid))

    res.json(userName);
});


route.listen(4000);
console.log("The server is listening");