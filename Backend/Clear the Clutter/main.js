const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    const clutterDir = path.join(__dirname,'clutter')
    const files = fs.readdirSync(clutterDir)
    files.forEach(file=>{
        const ext = path.extname(file).slice(1)
        if(!ext) return

        const oldPath = path.join(clutterDir,file)
        const newFolder = path.join(__dirname,ext)
        const newPath = path.join(ext,file)

        if(!fs.existsSync(newFolder)){
            fs.mkdirSync(newFolder)
        }
        fs.renameSync(oldPath,newPath)
    })
    res.send()
})
app.listen(port,()=>{
    console.log('Server is running');
})