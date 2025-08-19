// CRUD Opreations
use("CrudDB")
db.createCollection("names")

// // CREATE
// db.names.insertOne({
//     name: 'Mahir',
//     year: 2,
//     language: 'python'
// })
// db.names.insertMany([
//     { name: "Mahir", year: 2, language: "Python" },
//     { name: "Ayesha", year: 1, language: "JavaScript" },
//     { name: "Rohan", year: 3, language: "C++" },
//     { name: "Sanya", year: 4, language: "Java" },
//     { name: "Arjun", year: 2, language: "Go" },
//     { name: "Meera", year: 1, language: "Ruby" },
//     { name: "Kabir", year: 3, language: "Rust" },
//     { name: "Zara", year: 4, language: "TypeScript" }
// ])

// READ
db.names.find({year:2})
db.names.findOne({year:1})

// UPDATE
db.names.updateMany({year:3},{$set:{year:4}})
db.names.updateMany({name:"Meera"},{$set:{year:4}})
db.names.updateMany({name:"Arjun"},{$set:{year:4}})

// DELETE
db.names.deleteMany({year:4})