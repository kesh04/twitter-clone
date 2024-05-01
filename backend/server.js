import express from "express"
import dotenv from 'dotenv'
import authRoutes from './routes/authroutes.js'
import connectMongoDb from "./db/connectMongoDb.js";

const  app = express();
const PORT = process.env.PORT || 5000
dotenv.config();


app.use(express.json({ limit: "5mb" })); 
app.use(express.urlencoded({ extended: true })); 

app.use("/api/auth", authRoutes)

app.listen(PORT,()=>{
    console.log(`running ${PORT}`);
    connectMongoDb()
})
