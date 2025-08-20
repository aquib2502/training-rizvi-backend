import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';
dotenv.config()
connectDB()

const app = express();

app.use(express.json())

app.get('/test', (req,res) =>{
    res.status(200).json({message:"Api is running"})
})


const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})