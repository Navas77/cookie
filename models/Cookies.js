const express = require("express");
const app = express();
const mongoose = require("mongoose")
const userModel = require("./user")
const port = 1300;
const cors = require("cors");


app.use(cors());
app.use(express.json())


//database connection
mongoose.connect("mongodb://localhost:27017/cookietask")
.then(()=>{
    console.log("mongodb connected successfully");
    }).catch(()=>{
        console.log(" mongodb connection error");
        })

//post request handler

app.get("/set-cookie", (req,res)=>{
  
       res.cookie("username","johndoe",{maxAge:3600000})
       res.send("send a cookie")
        })
    

app.get("/get-cookie", (req,res)=>{
    const username = req.cookies.username;
    if(username){
        res.send(`user name is:${username}`)
    }else{
    res.send(`no username cookkie found`)
   } })
 



app.listen(port, () =>{
    console.log(`server running on port:${port}`);
    
})