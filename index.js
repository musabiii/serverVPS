const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('hi');
});

app.listen(8080,()=>{
    console.log('8080 is started');
});