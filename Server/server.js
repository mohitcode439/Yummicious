import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'


import dotenv from 'dotenv';
dotenv.config();

dotenv.config({ path: './config.env' });


const app = express(); 


app.use(bodyParser.json())
app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
 
}))

// userRouter
app.use('/api',userRouter)

// recipeRouter
app.use('/api',recipeRouter)

mongoose
  .connect(
    process.env.MONGO_URI,
    {
      dbName: "Food_app",
    }
  )
  .then(() => console.log("MongoDB is Connected..!"))
  .catch((err) => console.log(err.message));

const port = process.env.PORT;
app.listen(port, () => console.log(`server is running on port ${port}`));
 
