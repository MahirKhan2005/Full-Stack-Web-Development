const express = require('express')
const blog = require('./routes/blog')
const app = express()
app.use('/blog',blog)
const port = 3000

app.use(express.static('templates'))
app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.listen(port,()=>{
    console.log('Server is running');
})
app.get('/index',(req,res)=>{
    res.sendFile('/templates/index.html',{root:__dirname})
})
