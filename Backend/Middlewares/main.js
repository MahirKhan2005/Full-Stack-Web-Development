const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use((req,res,next)=>{
    fs.appendFileSync('name.txt','Mahir\n')
    next()
})
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(port,(req,res)=>{
    console.log('Server is running');
})
