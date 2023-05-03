const express=require("express");
const app = express();
const port= 3000;
app.get('/',(req,res)=>
{
    res.send("Hello World")
})
app.get('/home',(req,res)=>
{
    res.send("This is home page")
})
app.get('/contact',(req,res)=>
{
    res.send("This is contact page")
})
app.listen(port,()=>{
    console.log("The app is listening....")
});
