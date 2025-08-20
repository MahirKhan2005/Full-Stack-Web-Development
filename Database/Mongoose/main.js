import express from "express";
import mongoose from "mongoose";
import { Student } from "./models/todo.js";

const app = express()
const port = 3000;

let a = await mongoose.connect("mongodb://localhost:27017/todo")
app.get('/',async (req,res)=>{
    await Student.deleteOne({name:'Mahir'})
    await Student.updateOne({name:'Mahir'},{$set:{name:'Aisha'}})
    const students = await Student.find({})
    res.send(students)

})
app.listen(port,()=>{
    console.log('Server is running');
})