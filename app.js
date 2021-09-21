const { dir } = require('console');
const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('servidor corriendo');
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/home', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/views/login.html');
})

