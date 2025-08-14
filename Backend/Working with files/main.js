import fs from "fs"

// Asynchronous in nature, requires callback as a third argument
fs.writeFile('name.txt','Mahir',()=>{})

// Synchronous in nature, doesn't require callback as a third argument
fs.writeFileSync('name1.txt','Aarish')

fs.readFile('name.txt',(error,data)=>{
    console.log(error,data.toString());
})

fs.appendFile('name1.txt','\nAmeen',(e,d)=>{
    console.log(e,d);
})
