const express=require('express');
const { createTrade, getAllTrades, cryptoSoldTrade, cryptoTradeDelete, cryptoTradeSoldGet } = require('../controllers/cryptoController');
const router=express.Router();

router.route("/buy/crypto").post(createTrade);
router.route("/alltrades").get(getAllTrades);
router.route("/crypto/sold").post(cryptoSoldTrade);
router.route("/crypto/delete").delete(cryptoTradeDelete);
router.route("/crypto/allsoldtrades").get(cryptoTradeSoldGet);
module.exports=router;
