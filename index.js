const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('hi');
});

app.get('/home',(req,res)=>{
    res.send('home');
});

app.listen(81,()=>{
    console.log('81 is started');
});