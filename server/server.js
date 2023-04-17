const mongoose =require("mongoose");
const express = require ("express");
const cors =require ("cors");
const bodyParser= require("body-parser");
const app=express();
require("dotenv").config();
const path=require("path")

//url routes
const adminUrls=require("./routes/adminRoute");
const customerUrls=require("./routes/customerRoutes");
const foodUrls=require("./routes/foodRoutes");
const orderUrls=require("./routes/orderRoutes");
const tokenUrl=require("./routes/token")

//connect to mongodb
mongoose.connect(process.env.DB_URL ,console.log("database connected"));

//app.use(express.json())
//app.use(bodyParser.json({}));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(cors());

//use Urls
app.use("/remotecafe",adminUrls);
app.use("/remotecafe",customerUrls);
app.use("/remotecafe",foodUrls);
app.use("/remotecafe",orderUrls);
app.use("/token",tokenUrl);

//production
if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/build'));
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

//serve 
const port =process.env.PORT||5000;
app.listen(port,console.log(`serving at port ${port}`))