const mongoose =require("mongoose");
const express = require ("express");
const cors =require ("cors");
const bodyParser= require("body-parser");
const app=express();
require("dotenv").config();

//url routes
const adminUrls=require("./routes/adminRoute");
const customerUrls=require("./routes/customerRoutes");
const foodUrls=require("./routes/foodRoutes");
const orderUrls=require("./routes/orderRoutes");

//connect to mongodb
mongoose.connect(process.env.DB_URL ,console.log("database connected"));
app.use(bodyParser.json({}));
app.use(cors());

//use Urls
app.use("/remotecafe",adminUrls);
app.use("/remotecafe",customerUrls);
app.use("/remotecafe",foodUrls);
app.use("/remotecafe",orderUrls);
//serve 
const port =process.env.PORT||5000;
app.listen(port,console.log(`serving at port ${port}`))