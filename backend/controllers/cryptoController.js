const Crypto=require("../models/cryptoModel");
const SoldCrypto=require("../models/cryptoSoldModel");
exports.createTrade=async (req,res) =>{
    const trade=await Crypto.create(req.body);
    res.status(201).json({
        success:true,
        trade
    });
}
exports.getAllTrades=async (req,res)=>{
    const trade=await Crypto.find();
    res.status(200).json({
        success:true,
        trade
    })
}
exports.cryptoSoldTrade=async (req,res)=>{
    const trade=await SoldCrypto.create(req.body);
    res.status(201).json({
        success:true,
        trade
    })
}
exports.cryptoTradeDelete=async (req,res)=>{
    const trade = await Crypto.findById(req.body.id);
    await trade.remove()
    res.status(200).json({
        success:true
    })
}
exports.cryptoTradeSoldGet=async(req,res)=>{
    const trades=await SoldCrypto.find();
    res.status(200).json({
        success:true,
        trades
    })
}