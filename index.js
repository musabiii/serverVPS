const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('hi');
});

app.get('/home',(req,res)=>{
    res.send('home');
});

app.listen(80,()=>{
    console.log('80 is started');
});