import express from 'express'
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/:slug',(req,res)=>{
    console.log(req.query)
    res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
    console.log('Server is running');
})