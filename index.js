import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";


const app = express();
 app.use(bodyParser.json());
 app.use(cors());
 dotenv.config();


 const PORT = process.env.PORT || 7000;
 const URL = `mongodb+srv://rayhanmd655:${process.env.PASS}@backenddb.p2d07cz.mongodb.net/UI?retryWrites=true&w=majority&appName=backendDB`;


 mongoose.connect(URL).then(  () => {
  



    console.log("Database Connect Successfully");

    app.listen(PORT, () => {
        console.log(`Server Port is:${PORT}`)
    })
 } ).catch(error => console.log(error))


 app.use('/api',route);
