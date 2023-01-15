const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"]
    },
    category:{
        type:String,
        required:[true,"Please Enter Category"]
    },
    brand:{
        type:String,
        required:[true,"Please Enter Brand Name"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter Product Price"]
    },
    imgUrl:{
        type:String,
        required:[true,"Please Enter Product Image Url"]
    },
    size:{
        type:String,
    },
    fabric:{
        type:String
    },
});
module.exports=mongoose.model("products",productSchema);