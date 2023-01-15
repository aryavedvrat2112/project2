const mongoose=require("mongoose");
const soldCryptoSchema=({
    baseAsset:{
        type:String,
    },
    symbol:{
        type:String,
    },
    totalAmount:{
        type:Number,
        required:true
    },
    totalQuantity:{
        type:Number,
        required:true,
    },
    bidPrice:{
        type:Number,
        required:true,
    },
    currentPrice:{
        type:Number,
        required:true,
    },
    boughtAt:{
        type:String,
    },
    soldAt:{
        type:String,
        default:new Date()
    },
    tradeStatus:{
        type:String
    }
});
module.exports=mongoose.model("cryptosolds",soldCryptoSchema);