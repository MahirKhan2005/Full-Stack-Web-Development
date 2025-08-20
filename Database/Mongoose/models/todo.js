import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
    name : String,
    year : Number,
    cgpa : Number
})

export const Student = mongoose.model("Student",newSchema)