const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors");
const connectDatabase=require("./config/database");

// using middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
// routes 
const productRouter=require("./routes/productRoute");
const todoRoute=require("./routes/todoRoute");
const cryptoRoute=require("./routes/cryptoRoute");
app.use("/api/v1",productRouter);
app.use("/api/v1",todoRoute);
app.use("/api/v1",cryptoRoute);

connectDatabase();
// using middleware
const errorMiddleware=require("./middleware/error")
app.use(errorMiddleware)
module.exports=app;