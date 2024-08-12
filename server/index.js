import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import getHelath from "./health.js";
import { postSignup } from "./controllers/user.js";

const app = express();
app.use(express.json());
app.use(cors);

const connectDB = async ()=>{
    const conn = await mongoose.connect(`${process.env.MONGO_URL}`)
    if(conn){
        console.log("MongoDB Connected✅");
    }
}
connectDB()

app.get('/health',getHelath)

app.post('/signupfromthis' , postSignup)
// app.post('/login' , postLogin)



app.listen(()=>{
    console.log(`Server is running on port ${8000}`)
})