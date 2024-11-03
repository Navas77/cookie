const express =require('express');
const session = require('express-session');



const app = express();
const port = 1201;

app.use(
    session({
        secret:'my_secret_key',
        resave:false,
        saveUninitialized:true,
        cookie:{maxAge:60000}
    })
);

app.get('/set-name',(req,res)=>{
    const username=req.query.name||'guest';
    req.session.username=username;
    res.send(`session initialized with name:${username}`)
})

app.get('/get-name',(req,res)=>{
    if(res.session.username){
        res.send(`hello,${req.session.username}!welcome back.`)
    }else{
        res.send('no session data found')
    }
})



app.listen(port,()=>{
    console.log(`server running on port ${port}`);
    
});