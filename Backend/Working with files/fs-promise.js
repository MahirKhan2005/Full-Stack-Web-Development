import fs from "fs/promises"

// await can be used directly without async here because - first : we are using import system not require. It allows top level await second : fs.readFile resturns a promise
let name = await fs.readFile('name.txt')
console.log(name.toString());