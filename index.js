// Import Dependencies
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const productroute = require("./Routes/ProductMobileRoute")

// Configuration of Dotenv 
dotenv.config()

// Inalitizing the express to an app. 
const app = express();

// Creating a PORT 
const PORT = 4500;

// Listening to PORT 
app.listen((PORT),()=>{
    console.log(`app is listening to ${PORT}`)
})

// Connecting to MongoDB 
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((error)=>{
        console.log(error)
})

//Product - Route
app.use(bodyparser.json())
app.use("/api/v1/Product",productroute)


// Home API
app.use("/",(req,res)=>{
    res.send("Connected to Server")
 });

