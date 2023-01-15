const mongoose=require("mongoose");
const cryptoSchema=new mongoose.Schema({
    totalAmount:{
        type:Number,
        required:true,
    },
    totalQuantity:{
        type:Number,
        required:true,
    },
    baseAsset:{
        type:String,
        required:true,
    },
    symbol:{
        type:String,
        required:true,
    },
    bidPrice:{
        type:Number,
        required:true,
    },
    tradeStatus:{
        type:String,
        default:'buy'
    },
    boughtAt:{
        type:String,
        required:true,
        default:new Date()
    }
});
module.exports=mongoose.model("crypto",cryptoSchema);