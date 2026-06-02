const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('Order Service Running');
});

app.get('/health',(req,res)=>{
    res.status(200).send('OK');
});

app.listen(3000);
